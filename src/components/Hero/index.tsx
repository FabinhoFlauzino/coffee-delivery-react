import CarrinhoImg from "../../assets/carrinho-img.png"
import CaixaImg from "../../assets/caixa-img.png"
import RelogioImg from "../../assets/relogio-img.png"
import ChicaraImg from "../../assets/chicara-img.png"
import HeroImg from "../../assets/img-hero.png"
import styles from "./Hero.module.css"

export function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.secaoDireita}>
        <div className={styles.content}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <div className={styles.vantagens}>
          <div>
            <img src={CarrinhoImg} alt="" />
            <p>Compra simples e segura</p>
          </div>

          <div>
            <img src={CaixaImg} alt="" />
            <p>Embalagem mantém o café intacto</p>
          </div>

          <div>
            <img src={RelogioImg} alt="" />
            <p>Entrega rápida e rastreada</p>
          </div>

          <div>
            <img src={ChicaraImg} alt="" />
            <p>O café chega fresquinho até você</p>
          </div>
        </div>
      </div>

      <div className={styles.secaoEsquerda}>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  )
}