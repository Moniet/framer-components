import styles from './styles.module.css'

const Dot = ({ from, to }) => {
  return (
    <div
      style={
        {
          '--from': from,
          '--to': to,
        } as any
      }
      className={styles.dot}
    />
  )
}

export const DefaultGoo = () => {
  return (
    <div className={styles.defaultContainer}>
      <Dot from="0px" to={'-25px'} />
      <Dot from="0px" to={'25px'} />
    </div>
  )
}
