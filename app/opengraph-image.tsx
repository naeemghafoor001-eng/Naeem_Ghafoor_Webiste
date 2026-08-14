import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Naeem Ghafoor | Research, Policy & Digital Solutions";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0F283C",
          padding: "60px 80px",
          color: "white",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundColor: "#166534",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            NG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px", fontWeight: "bold", color: "#FFFFFF" }}>
              Naeem Ghafoor
            </span>
            <span style={{ fontSize: "16px", color: "#34D399" }}>
              Research, Policy &amp; Digital Solutions
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#34D399",
              backgroundColor: "rgba(22, 101, 52, 0.4)",
              padding: "8px 16px",
              borderRadius: "20px",
              width: "fit-content",
            }}
          >
            Research &bull; Policy &bull; Data &bull; AI &bull; Presentations
          </span>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Research, Policy &amp; Digital Solutions
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#D1D5DB",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.4,
              fontFamily: "sans-serif",
            }}
          >
            Turning complex ideas, evidence and data into clear research, professional reports, presentations and practical digital solutions.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            fontSize: "16px",
            color: "#9CA3AF",
            fontFamily: "sans-serif",
          }}
        >
          <span>naeemghafoor.vercel.app</span>
          <span>Public Policy &bull; Research &bull; Data &bull; Digital</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
