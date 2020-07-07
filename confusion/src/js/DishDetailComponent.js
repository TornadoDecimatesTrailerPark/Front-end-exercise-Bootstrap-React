import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
        this.renderDish = this.renderDish.bind(this);
    }
    renderDish(dish) {
        if (dish == null) {
            return <div></div>
        } else {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody> 
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }
    renderComments(comments) {
        if (comments) {
            const menu = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {menu}
                </div>
            );
        }
    }
    render() {
        let dish;
        if (this.props.dish == null) {
            dish = {}
        } else {
            dish = this.props.dish;
        }
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <ul className="list-unstyled">
                        {this.renderComments(dish.comments)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DishDetail;