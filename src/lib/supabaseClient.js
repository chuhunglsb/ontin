import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://orvjqxggcyrgbqqsqvlo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_Wng-7AhMG-qnbka8B_YV3g_orplm5mV';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let client = null;
try {
  if (isSupabaseConfigured) {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    });
  }
} catch (err) {
  console.warn('Không thể khởi tạo Supabase client:', err);
}

export const supabase = client;

/**
 * Helper đăng ký kênh Realtime cho phòng học theo mã PIN
 * @param {string} pinCode - Mã PIN phòng bài giảng (ví dụ '682915')
 * @param {function} onEventReceived - Callback khi có event từ học sinh hoặc giáo viên
 */
export function subscribeToLiveRoom(pinCode, onEventReceived) {
  if (!supabase || !pinCode) return null;

  const sanitizedPin = String(pinCode).replace(/\s/g, '');
  const channelName = `room_${sanitizedPin}`;

  const channel = supabase.channel(channelName, {
    config: {
      broadcast: { self: false }, // không nhận lại tin do chính mình phát
      presence: { key: sanitizedPin },
    },
  });

  channel
    .on('broadcast', { event: 'room_event' }, (payload) => {
      if (onEventReceived && payload?.payload) {
        onEventReceived(payload.payload);
      }
    })
    .subscribe((status) => {
      console.log(`[Supabase Realtime] Kênh ${channelName} trạng thái:`, status);
    });

  return channel;
}

/**
 * Helper phát tin (broadcast) tới phòng học
 * @param {object} channel - Supabase Channel instance
 * @param {string} action - Tên hành động (student_join, slide_change, submit_answer, end_lesson, ...)
 * @param {object} data - Dữ liệu kèm theo
 */
export async function broadcastToRoom(channel, action, data = {}) {
  if (!channel) return false;

  try {
    await channel.send({
      type: 'broadcast',
      event: 'room_event',
      payload: {
        action,
        timestamp: Date.now(),
        ...data,
      },
    });
    return true;
  } catch (err) {
    console.error('Lỗi khi broadcast tin nhắn qua Supabase:', err);
    return false;
  }
}
