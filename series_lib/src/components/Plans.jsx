import './Plans.css';
import {BsCheck} from 'react-icons/bs'

const Plans = () => {
  return (


    <div className="plans-container">
      <h1>Escolha o melhor plano para você</h1>
      <p>Assista na TV, Tablet, Laptop, Smartphone e mais!</p>
      <h3>Escolha seu plano</h3>

      <div className="plan-wraper">
        <div className="plan-container">
          <h3>4 Meses</h3>
          <h3>R$ 46,00</h3>
          <p><BsCheck/>Equivalente à R$11,50 por mês!</p>
          <p><BsCheck/>Economize R$26,00!</p>
          <button><a href="#">Escolha este plano</a></button>
        </div>

        <div className="plan-container">
          <h3>12 Meses</h3>
          <h3>R$ 120,00</h3>
          <p><BsCheck/>Equivalente à R$10,00 por mês!</p>
          <p><BsCheck/>Economize R$96,00!</p>
          <button><a href="#">Escolha este plano</a></button>
        </div>
        <div className="plan-container">
          <h3>1 Mês</h3>
          <h3>R$ 18,00</h3>
          <p><BsCheck/>Mais barato que outros serviços de streaming</p>
          <p><BsCheck/>Conheça!</p>
          <button><a href="#">Escolha este plano</a></button>
        </div>
      </div>


    </div>
  )
}

export default Plans