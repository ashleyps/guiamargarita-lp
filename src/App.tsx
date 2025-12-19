import { Target, Trophy, MapPinned, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* Hero Section */}
      <header className="relative pt-0 pb-0 flex flex-col items-center justify-start bg-white">

        {/* 1. Imagen de Fondo (Playa) + Modelo */}
        <div className="relative w-full h-[55vh] md:h-[620px] overflow-hidden bg-brand-offwhite">
          {/* Background Image */}
          <img
            src="/fondo-gm.webp"
            alt="Fondo Playa"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-black/5 z-0"></div>

          <div className="container mx-auto px-4 h-full relative flex flex-col items-center justify-end z-10 pb-28 md:pb-32">

            {/* Layered Typography: ISLA DE MARGARITA */}
            <div className="absolute top-[8%] md:top-[10%] left-0 w-full text-center leading-[0.8] select-none z-0 pointer-events-none">
              <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-heading font-black text-[5rem] md:text-[9rem] lg:text-[12rem] text-white drop-shadow-xl tracking-tighter"
              >
                ISLA DE
              </motion.h2>
              <motion.h2
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading font-black text-[5rem] md:text-[9rem] lg:text-[13rem] text-[#FF6B00] drop-shadow-xl tracking-tighter -mt-2 md:-mt-6"
              >
                MARGARITA
              </motion.h2>
            </div>

            {/* Elements Layer: Model + Hearts */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center pointer-events-none z-10">

              {/* Heart Left - Aligned with "ISLA DE" Text */}
              {/* Reduced Mobile Size: w-16 (from w-24) ~25-30% reduction */}
              <motion.img
                src="/corazon-izquierdo.webp"
                className="w-16 md:w-28 lg:w-36 absolute left-2 md:left-[15%] top-[15%] md:top-[22%] drop-shadow-2xl z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />

              {/* Model - Centered Bottom */}
              {/* Lifted -10px */}
              <motion.img
                src="/modelo.webp"
                alt="Turista feliz"
                className="absolute bottom-0 h-[85%] md:h-[90%] w-auto object-contain drop-shadow-2xl z-10 -translate-y-[10px]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              {/* Heart Right - Aligned with "ISLA DE" Text */}
              {/* Reduced Mobile Size: w-16 */}
              <motion.img
                src="/corazon-derecho.webp"
                className="w-16 md:w-28 lg:w-36 absolute right-2 md:right-[15%] top-[15%] md:top-[22%] drop-shadow-2xl z-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              />
            </div>

          </div>

          {/* White Convex Curve */}
          <div className="absolute -bottom-[10%] md:-bottom-[45%] left-1/2 -translate-x-1/2 w-[180%] md:w-[130%] h-[25%] md:h-[60%] bg-white rounded-[100%] z-0"></div>
        </div>

        {/* 2. Tarjeta Azul Marca (Teal) con el Copy */}
        <div className="relative z-30 -mt-24 md:-mt-44 w-full px-4 mb-4 md:mb-12 pointer-events-none">
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            className="bg-brand-tealdark text-white rounded-t-[50px] md:rounded-t-[80px] rounded-b-[15px] p-6 pt-8 md:p-8 md:pt-10 max-w-3xl mx-auto text-center shadow-xl relative overflow-hidden pointer-events-auto"
          >
            {/* H1 Mobile: Reduced size (text-xl approx 20px) and tighter leading (leading-none) */}
            <h1 className="font-heading font-extrabold text-xl md:text-[40px] lg:text-[45px] mb-3 md:mb-5 drop-shadow-sm leading-none md:leading-tight text-white">
              Tus Próximos Clientes <br />
              Te Están Buscando Aquí.
            </h1>

            <p className="font-sans text-brand-offwhite text-sm md:text-lg font-medium leading-relaxed max-w-xl mx-auto mb-5 md:mb-6">
              Únete a la guía que más de <strong>2.000 visitantes</strong> usan cada mes para decidir dónde comprar, comer y disfrutar en Margarita.
            </p>

            <a
              href="https://guiamargarita.com/publicar-anuncio/"
              className="bg-brand-orange text-white hover:bg-white hover:text-brand-orange text-lg md:text-xl font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 mx-auto w-full md:w-auto text-decoration-none"
            >
              <span>REGISTRAR MI NEGOCIO GRATIS</span>
            </a>
            <p className="mt-4 text-base md:text-lg text-white font-bold opacity-90">
              Si no estás, no existes para ellos.
            </p>
          </motion.div>
        </div>

      </header>


      {/* Benefits Section */}
      {/* Reduced Spacing: py-10 for mobile */}
      <section className="py-10 md:py-20 bg-white relative z-10">
        <div className="w-full md:w-[80%] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10" />
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-xl md:text-2xl mb-4 text-brand-teal uppercase leading-tight">
                Atrae Clientes,<br /> No solo Clics:
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Conecta con una audiencia lista para comprar, no solo curiosos navegando.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-10 h-10" />
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-xl md:text-2xl mb-4 text-brand-teal uppercase leading-tight">
                Destaca sobre tu<br /> Competencia:
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Asegúrate de que te elijan a ti cuando comparen opciones en la isla.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  <MapPinned className="w-10 h-10" />
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-xl md:text-2xl mb-4 text-brand-teal uppercase leading-tight">
                Conecta con <br /> Turistas y Locales:
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Captura ambos mercados con un solo perfil optimizado y visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* Reduced Spacing: py-10 for mobile */}
      <section className="py-10 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-4 text-brand-dark uppercase">
              ES ASÍ DE SENCILLO:
            </h2>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-md flex items-start md:items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-md">
                <ChevronRight className="w-8 h-8" />
              </div>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                <span className="font-bold">Encuentra o Registra tu Negocio:</span> Busca tu local en nuestra base de datos o créalo desde cero.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-md flex items-start md:items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-md">
                <ChevronRight className="w-8 h-8" />
              </div>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                <span className="font-bold">Completa tu Perfil:</span> Añade fotos, horario, WhatsApp y las ofertas que te hacen único.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8 shadow-md flex items-start md:items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-md">
                <ChevronRight className="w-8 h-8" />
              </div>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                <span className="font-bold">Empieza a Recibir Clientes:</span> Aparece en los resultados de búsqueda y deja que nuestra audiencia te descubra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* Reduced Spacing: py-10 for mobile */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">

          {/* Laptop/Phone Image */}
          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-8 md:mb-12">
            <img
              src="/telefono-playa.webp"
              alt="Gestión desde el móvil"
              className="w-full h-full object-cover aspect-square md:aspect-[16/9]"
            />
          </div>

          {/* CTA Button */}
          <div className="max-w-2xl mx-auto">
            <a
              href="https://guiamargarita.com/publicar-anuncio/"
              className="bg-brand-orange text-white hover:bg-brand-dark text-xl md:text-2xl font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 mx-auto w-full md:w-auto mb-6 text-decoration-none"
            >
              <span>REGISTRAR MI NEGOCIO GRATIS</span>
            </a>
            <p className="font-sans text-gray-600 font-medium text-lg">
              Toma menos de 5 minutos y el registro básico es 100% gratuito.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-gray-50 pt-10 pb-8 border-t border-gray-100 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">

          {/* Logo */}
          <img
            src="/guiamargarita-logo.svg"
            alt="Guía Margarita"
            className="h-10 md:h-12 mx-auto mb-6"
          />

          {/* Legal Links */}
          <div className="flex flex-row justify-center items-center gap-3 mb-2 text-sm font-medium text-gray-500">
            <a href="https://guiamargarita.com/terminos-y-condiciones/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
              Términos y Condiciones
            </a>
            <span className="text-gray-300">|</span>
            <a href="https://guiamargarita.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
              Política de Privacidad
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-xs text-opacity-80">
            &copy; {new Date().getFullYear()} Guía Margarita. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
