import './Accordion.css';
import {BiSolidDownArrow} from 'react-icons/bi';

const Accordion = () => {
    return (
        <div className="faq">
            <h1>Dúvidas Frequentes</h1>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-1" />
                    <label htmlFor="title-1">O que é o Series Prime?
                        <span><BiSolidDownArrow/></span>
                    </label>
                    <p>É o serviço de streaming de séries e filmes mais completo do Brasil.</p>
                </div>
            </div>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-2" />
                    <label htmlFor="title-2">Eu posso usar o serviço de graça?
                        <span><BiSolidDownArrow/></span>
                    </label>
                    <p>Você pode assistir uma seleção das séries e filmes de graça com anúncios.</p>
                </div>
            </div>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-3" />
                    <label htmlFor="title-3">Quais os benefícios da assinatura?
                        <span><BiSolidDownArrow/></span>
                    </label>
                    <p>Catálogo completo de séries e filmes sem anúncios, até 5 telas e a possibilidade
                        de assistir offline.</p>
                </div>
            </div>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-4" />
                    <label htmlFor="title-4">O que é o teste grátis?
                        <span><BiSolidDownArrow/></span>
                    </label>
                    <p>Você pode experimentar a experiência completa por 30 dias antes de adiquirir uma assinatura.</p>
                </div>
            </div>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-5" />
                    <label htmlFor="title-5">Posso cancelar a assinatura a qualquer momento?
                        <span><BiSolidDownArrow/></span>
                    </label>
                    <p>Sim! Não há multa nem cobranças adicionais, ao cancelar o serviço a assinatura é removida.</p>
                </div>
            </div>

        </div>
    )
}

export default Accordion