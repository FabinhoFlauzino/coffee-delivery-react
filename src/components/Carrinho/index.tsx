import styles from './Carrinho.module.css'
import CarrinhoIcon from '../../assets/cart-icon.svg'


export function Carrinho() {
  return (
    <div className={styles.carrinhoContainer}>
      <img src={CarrinhoIcon} alt="" />
    </div>
  )
}