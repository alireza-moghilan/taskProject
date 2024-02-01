import { Link, useLocation } from 'react-router-dom';

export const BoxLink = props => {
    return (
        <>
            <div className={props.classCol}>
                <div className='card-custom rounded-4 px-3 py-4 d-flex align-items-center justify-content-start h-100'>
                    <div className='me-4'>
                        <div className='rounded-3'>
                            {
                                props.img
                            }
                        </div>
                    </div>
                    <div>
                        <div className='text-center mb-3'>
                            <h4 className='fw-bold text-black h5'>{props.title}</h4>
                        </div>
                        {/* <Link to={props.link} className='text-main mb-0 decoration-none'>
                            <span className='me-2'>مشاهده</span> <i className="bi bi-arrow-left-circle"></i>
                        </Link> */}
                        <div className='text-main mb-0 d-flex'>
                            <small className='me-2'>{props.number}</small> 
                            <span className='me-2'>{props.description}</span> 
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}