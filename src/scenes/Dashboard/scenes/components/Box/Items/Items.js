import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdCheckCircle } from 'react-icons/md';

const ItemWrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;

    padding-left: 1rem;
    padding-right: 1rem;

    margin-left: 1rem;
    margin-right: 1rem;

    flex: 1 1 auto;
    max-height: 6rem;
    min-height: 4rem;

    :hover {
        color: ${props => props.theme.lightBlue};
    }

    font-size: 1rem;

    svg {
        position: relative;
        top: 1;
        left: 0;
        width: 1.2rem;
        height: 1.2rem;
        
        &.complete {
            color: green;
        }

        &.not-complete {
            color: red;
        }
    }

    span {
        max-height: 6rem;
        p {
            margin: 0;
            padding-left: 0.1rem;
            padding-top: 0.1rem;
        }
    }

    span:nth-child(1) {
        flex: 1;
        display: flex;
        align-items: center;
    }

    span:nth-child(2) {
        flex: 2;
        text-align: center;
    }

    span:nth-child(3) {
        flex: 2;
        text-align: left;
    }

`;

const ItemWrapperDepartments = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;

    padding-left: 1rem;
    padding-right: 1rem;

    margin-left: 1rem;
    margin-right: 1rem;

    flex: 1 1 auto;
    max-height: 6rem;
    min-height: 4rem;

    :hover {
        color: ${props => props.theme.lightBlue};
    }

    font-size: 1rem;

    svg {
        position: relative;
        top: 1;
        left: 0;
        width: 1.2rem;
        height: 1.2rem;
        
        &.complete {
            color: green;
        }

        &.not-complete {
            color: red;
        }
    }

    span {
        max-height: 6rem;
        flex: 1;

        p {
            margin: 0;
        }
    }

    span:last-child {
        text-align: center;
    }

`;

const HoverTask = styled.div`
    position: absolute;
    top: 50%;
    left: 35%;
    background-color: white !important;
    border: 1px solid black;
    width: 50rem;
    height: 30rem;
    z-index: 500;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;

    h3 {
        color: ${ props => props.theme.darkBlue };
        margin: 0;
    }

    div.task-hover__date-and-person {
        display: flex;
        justify-content: space-between;
        width: 75%;
        background-color: white !important;
    }

    div.task-hover__text-area {
        width: 100%;
        height: 50%;
        background-color: white !important;

        textarea {
            width: 100%;
            height: 100%;
        }
    }

    div.task-hover__submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 20%;
        background-color: white !important;
    }
`;


class Items extends Component {
    state = { 
        isHovering: false,
    }

    handleMouseOver = (e) => {
        console.log(this.state.isHovering)
        this.setState({
            isHovering: true,
        });
    }

    handleMouseOut = () => {
        this.setState({
            isHovering: false,
        });
    }

    render() {
        const { id, infoItem, status } = this.props.data;

        let item;
        if ( this.props.styleHack === 'departments' ) {
            item = (
            <ItemWrapperDepartments key={Math.random()} onClick={() => this.props.onItemSelect(id)}>
                { infoItem.map((el, i) => i === 0 && status === 'notComplete' ? 
                        <span keys={Math.random()}><MdCheckCircle className='not-complete'/>{el}</span> :
                    i === 0 && status === 'complete' ?
                        <span keys={Math.random()}> <MdCheckCircle className='complete' />{el}</span> :
                        <span keys={Math.random()}><p>{el}</p></span>)}
            </ItemWrapperDepartments>
            )
        } else {
            item = (
                <>
                    <ItemWrapper key={Math.random()}
                        onMouseEnter={this.handleMouseOver}
                        onMouseLeave={this.handleMouseOut}
                    >
                        { infoItem.map((el, i) => i === 0 && status === 'notComplete' ? 
                                <span><MdCheckCircle className='not-complete'/><p>{el}</p></span> :
                            i === 0 && status === 'complete' ?
                                <span> <MdCheckCircle className='complete' />{el}</span> :
                                <span><p>{el}</p></span>)}
                    </ItemWrapper>
                    
                </>
            )
        }

        return ( 
            <>
                {item}
                {this.state.isHovering ? 
                        <HoverTask>
                            <h3>Ryk Flack for om vi skal lave et TP Review</h3>
                            <div className="task-hover__date-and-person">
                                <span>
                                    <p>Deadline: 31-12-2019</p>
                                </span>
                                <span>
                                    <p>Oprettet af: Henrik Lund</p>
                                </span>
                            </div>
                            <div className='task-hover__text-area'>
                                <textarea />
                            </div>
                            <div className='task-hover__submit'>
                                <button>Fuldført</button>
                            </div>
                        </HoverTask> : 
                        null
                    }
            </>
        );
    }
}
 
// export default Items; 

// Items = (props) => {
//     const { id, infoItem, status } = props.data;

//     let item;
//     if ( props.styleHack === 'departments' ) {
//         item = (
//         <ItemWrapperDepartments key={Math.random()} onClick={() => props.onItemSelect(id)}>
//             { infoItem.map((el, i) => i === 0 && status === 'notComplete' ? 
//                     <span><MdCheckCircle className='not-complete'/>{el}</span> :
//                 i === 0 && status === 'complete' ?
//                     <span> <MdCheckCircle className='complete' />{el}</span> :
//                     <span><p>{el}</p></span>)}
//         </ItemWrapperDepartments>
//         )
//     } else {
//         item = (
//             <>
//                 <ItemWrapper key={Math.random()}
//                     onMouseEnter={props.onMouseEnterHandler}
//                     onMouseLeave={props.onMouseLeaveHandler}
//                 >
//                     { infoItem.map((el, i) => i === 0 && status === 'notComplete' ? 
//                             <span><MdCheckCircle className='not-complete'/><p>{el}</p></span> :
//                         i === 0 && status === 'complete' ?
//                             <span> <MdCheckCircle className='complete' />{el}</span> :
//                             <span><p>{el}</p></span>)}
//                 </ItemWrapper>
//                 {props.isHover ? 
//                     <HoverTask>
//                         <h3>Ryk Flack for om vi skal lave et TP Review</h3>
//                         <div className="task-hover__date-and-person">
//                             <div>
//                                 <p>Deadline: 31-12-2019</p>
//                             </div>
//                             <div>
//                                 <p>Oprettet af: Henrik Lund</p>
//                             </div>
//                         </div>
//                         <div className='task-hover__text-area'>
//                             <textarea />
//                         </div>
//                         <div className='task-hover__submit'>
//                             <button>Fuldført</button>
//                         </div>
//                     </HoverTask> : 
//                     null
//                 }
//             </>
//         )
//     }

//     return ( 
//         item
//      );
// }

Items.propTypes = {

}

export default Items;