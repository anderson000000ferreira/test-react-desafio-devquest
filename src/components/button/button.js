import '../geral/geral.css'

const infoText = () => {
    window.alert('A label desse botão é " Tristeza "')
}

const Button = (props) => {
    return (
        <button onClick= {infoText} className='format'>{props.label}
            
        </button>
    )
}

Button.defaultProps = {
    label: 'Tristeza'
}

export default Button