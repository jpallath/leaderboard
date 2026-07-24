import Link from "next/link";
import QRCode from "react-qr-code";

export const QRCodeInForm = ({ qrValue }: { qrValue: string | null }) => {
  if (qrValue) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-inner">
        <div className="p-6 bg-surface rounded-2xl border border-surface-border flex flex-col items-center shadow-xl max-w-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-content-muted mb-4">
            Scan to Join Meet
          </h3>
          <Link href={qrValue}>
            <QRCode
              value={qrValue}
              size={200}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 200 200`}
            />
            <p className="text-xs text-content-muted mt-4 text-center break-all">
              {qrValue}
            </p>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
