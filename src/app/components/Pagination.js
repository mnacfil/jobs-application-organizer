import React from 'react'
import styled from 'styled-components'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const Pagination = ({ pages, page, dispatch, navigateToNextPage, navigateToPrevPage, navigateToTargetPage}) => {
  return (
    <Wrapper>
        <div className='pagination-controllers'>
            <button 
                type='button' 
                className='btn prev-btn'
                onClick={() => dispatch(navigateToPrevPage())}
                >
                <FiChevronsLeft />
                <span>Prev</span>
            </button>
            <div>
                {Array(pages).fill().map((button, index) => {
                    return (
                        <button 
                            className={`${(index + 1) === page ? 'active-btn' : ''} page-btn`}
                            onClick={() => dispatch(navigateToTargetPage(index + 1))}
                        >
                            {index + 1}
                        </button>
                    )
                })}
            </div>
            <button 
                type='button' 
                className='btn next-btn'
                onClick={() => dispatch(navigateToNextPage())}
                >
                <span>Next</span>
                <FiChevronsRight />
            </button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;

    .pagination-controllers {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .prev-btn, .next-btn {
            display: flex;
            align-items: center;
            height: 40px;
            background: var(--white);
            color: var(--primary-500);
            font-weight: 500;

            &:hover {
                background: var(--primary-500);
                color: var(--white);
            }
        }
        .prev-btn {
            svg {
                margin-right: 0.25rem;
            }
        }
        .next-btn {
            span {
                margin-right: 0.25rem;
            }
        }
        div {
            height: 40px;
            margin: 0 1.5rem;
            button {
                height: 100%;
                display: inline-block;
                width: 45px;
                font-size: 1.5rem;
                border: none;
                background: var(--white);
                color: var(--primary-500);
                transition: var(--transition);
                border-radius: var(--borderRadius);
                box-shadow: var(--shadow-2);
                margin: 0 0.25rem;
                cursor: pointer; 
                &:hover {
                    transform: scale(1.1);
                    background: var(--primary-500);
                    color: var(--white);
                }
            }
            .active-btn{
                background: var(--primary-500);
                color: var(--white);
            }
        }
    }
`;

export default Pagination