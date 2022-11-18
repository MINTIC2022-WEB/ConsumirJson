import '../styles/AddCartBtn.css';

const AddCartBtn = (props) => {
  return (
    <button onClick={()=>{alert(`Has comprado ${props.name} en $${props.newPrice} `)}}>Comprar</button>
  )
}

export  {AddCartBtn}