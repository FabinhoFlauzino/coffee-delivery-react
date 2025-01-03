import styles from "./ProdutoItem.module.css"
import Carrinho from "../../assets/carrinho-btn.png"
import MinusIcon from "../../assets/minus.svg"
import PlusIcon from "../../assets/plus.svg"

export type ProdutoItemProps = {
  id: number
  img: string
  tags: string[]
  nome: string
  descricao: string
  preco: number
}

export function ProdutoItem({ descricao, img, nome, preco, tags }: ProdutoItemProps) {
  return (
    <div className={styles.produtoItem}>
      <img src={img} alt="Produto" className={styles.img} />

      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <h3>{nome}</h3>

      <p>{descricao}</p>

      <div className={styles.preco}>
        <div className={styles.valor}>R$ <span>{preco}</span></div>
        <div className={styles.quantidade}>
          <div className={styles.botoes}>
            <button><img src={MinusIcon} alt="" /></button>
            <span>1</span>
            <button><img src={PlusIcon} alt="" /></button>
          </div>
          <button>
            <img src={Carrinho} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}