import styles from "./Footer.module.css" //importo estilos usando cssmodules

export const Footer = ()=> {
  return <footer>
    <h4 className={styles.title}>Este es mi footer</h4> {/* para usar los estilos de cssmodules se lo hace como objetos */}
  </footer>
}