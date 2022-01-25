import React, { useState } from 'react'
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap'

const BookCard = ({
    thumbnail,
    title,
    pageCount,
    language,
    authors,
    publisher,
    description,
    previewLink
}) => {

    //states 
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    //implementation of Cards for Books
    return (
        //card
        <Card style={{}} className='m-auto'>
            <div className='slide slide1'>
                <div className='icon'>
                    {/* Card image */}
                    <CardImg className='imgCard' top style={{ width: '100%', height: '233px' }} src={thumbnail} alt='card img'></CardImg>
                </div>
            </div>

            {/* Card Body */}
            <CardBody className='slide slide2'>
                <CardTitle className='card-title'>{title}</CardTitle>
                <Button onClick={toggle}>More Info</Button>
            </CardBody>

            {/* Implementaion of View more details of the book */}
            <Modal isOpen={modal} toggle={toggle}>
                <div className='modal-header d-flex justify-content-between'>
                    <h5 className='modal-title text-center'>{title}</h5>
                    <button
                        className='close'
                        type='button'
                        onClick={toggle}
                        style={{ all: 'unset' }}
                    ><span aria-hidden={true}>X</span></button>
                </div>

                {/* Modal body */}
                <div className='modal-body'>
                    <div>
                        <img src={thumbnail} alt={title} style={{ height: '233px', width: '65%', margin: 'auto', display: 'flex', marginBottom: '3%' }} />
                        <div>
                            <p>Page count: {pageCount}</p>
                            <p>Language: {language}</p>
                            <p>Authors: {authors}</p>
                            <p>Publisher: {publisher}</p>
                        </div>
                    </div>

                    {/* Modal Description */}
                    <div className='description'>
                        {description}
                    </div>
                </div>

                {/* Modal Footer */}
                <div className='modal-footer'>
                    <a
                        href={previewLink}
                        className='btn btn-secondary'
                    >
                        Preview Link
                    </a>
                </div>
            </Modal>
        </Card>
    )
}

export default BookCard
