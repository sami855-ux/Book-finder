import styles from "./Spinner.module.css"

const Spinner = () => {
  return (
    <div className="w-52 h-52 pl-20 pt-24">
      <div className={styles.loader}></div>
    </div>
  )
}

export default Spinner
