import { ProdutoItem } from "../ProdutoItem"
import styles from "./Produtos.module.css"
import produtos from "../../data/Produtos"

export function Produtos() {
  return (
    <section className={styles.produtosContainer}>
      <h2>Nossos cafés</h2>

      <div className={styles.produtos}>
        {produtos.map(produtos => (
          <ProdutoItem
            id={produtos.id}
            key={produtos.id}
            img={produtos.img}
            tags={produtos.tags}
            nome={produtos.nome}
            preco={produtos.preco}
            descricao={produtos.descricao}
          />

        ))}
      </div>
    </section>
  )
}