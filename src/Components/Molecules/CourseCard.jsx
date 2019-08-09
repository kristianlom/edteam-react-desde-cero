import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import {addToCart} from "../../redux/actionsCreators";
import {connect} from "react-redux"

const CourseCard = ({id, title, image, price, professor, addCourseToCart, cart}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/courses/${id}`}>
                <img src={image} alt={title}/>
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                {professor}
            </div>
            <div className="s-main-center">
                <button
                    className="button--ghost-alert button--tiny"
                    onClick={() => addCourseToCart(id)}
                >
                    {
                        cart.find(a => a === id)
                            ? "Remover del carrito"
                            : `$ ${price}`
                    }
                </button>
            </div>
        </div>
    </article>
);

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    professor: PropTypes.string
};

CourseCard.defaultProps = {
    title: "No se encontó título",
    image: "https://thumbs.dreamstime.com/x/monstruo-del-vintage-dinosaurio-gigante-en-la-ciudad-blanco-y-negro-120241625.jpg",
    price: "--",
    professor: ""
};

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    addCourseToCart(id) {
        dispatch(addToCart(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)
