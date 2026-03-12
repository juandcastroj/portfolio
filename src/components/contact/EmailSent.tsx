import { Link } from "react-router-dom";

export default function EmailSent() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base/8 font-semibold text-green-800 dark:text-white">¡Gracias!</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold text-green-800 dark:text-white ">
            Tu correo ha sido enviado
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-green-800 dark:text-white/70 sm:text-xl/8">
            Me pondré en contacto contigo lo antes posible. <br />
            ¡Gracias por tu interés en trabajar conmigo!
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/" className="text-sm/7 font-semibold text-green-800 dark:text-white hover:text-white/90">
              <span aria-hidden="true">&larr;</span> Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
