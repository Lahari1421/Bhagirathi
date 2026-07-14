import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${site.name} — Premium Water & Packaging Manufacturer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #06121d 0%, #0A1B2A 45%, #125c66 100%)',
          padding: '80px',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: 'linear-gradient(135deg,#7EE8F2,#0E7C86)',
              display: 'flex',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>Bhagirathi Industries</span>
            <span style={{ fontSize: 16, letterSpacing: 6, color: '#7EE8F2' }}>
              PRIVATE LIMITED
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            Purity, engineered to global standards.
          </span>
          <span style={{ marginTop: 24, fontSize: 26, color: 'rgba(255,255,255,0.7)', maxWidth: 880 }}>
            Packaged &amp; alkaline water · PET bottles · OEM / private label · export-ready
          </span>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['BIS', 'FSSAI', 'ISO-aligned', 'Export-ready'].map((t) => (
            <span
              key={t}
              style={{
                fontSize: 20,
                padding: '10px 22px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
