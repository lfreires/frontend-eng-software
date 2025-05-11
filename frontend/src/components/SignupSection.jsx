import React from "react";


const SignupSection = () => {
  return (
  <section
    id="signup"
    className="d-flex justify-content-center align-items-center text-white text-center"
    style={{
      height: "100vh",
      backgroundColor: "rgba(4, 34, 66, 0.9)", // Cor de fundo azul com transparência
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2" data-aos="fade-up">
          <h2 className="display-4 mb-4">Pronto para Transformar sua Carreira?</h2>
          <p className="lead mb-4">
            Cadastre-se agora e tenha acesso a mentores qualificados que vão ajudar você a alcançar seus objetivos profissionais.
          </p>
          <button
            href="#"
            className="btn btn-light btn-lg px-5 py-3"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Cadastre-se Agora
          </button>
        </div>
      </div>
    </div>
  </section>
  )
};

export default SignupSection;
