'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573001112233"
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
      title="¿Necesitas ayuda?"
    >
      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
        <path d="M20.52 3.48A12.07 12.07 0 0012 0a12 12 0 00-10.5 18L0 24l6.3-1.65A12 12 0 0012 24a12.07 12.07 0 008.52-20.52zM12 22a9.94 9.94 0 01-5.09-1.38l-.36-.22-3.73.98 1-3.63-.23-.37A9.94 9.94 0 1122 12a9.94 9.94 0 01-10 10zm5.07-7.47l-2.15-.62a1 1 0 00-.94.26l-.43.44a7.09 7.09 0 01-3.17-3.17l.44-.44a1 1 0 00.26-.94l-.62-2.15a1 1 0 00-.92-.7h-1a1 1 0 00-1 1 8 8 0 008 8 1 1 0 001-1v-1a1 1 0 00-.7-.92z"/>
      </svg>
    </a>
  );
}
