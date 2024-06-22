import React from 'react'
import Heading from '../atom/Heading'
import Paragraph from '../atom/Paragraph'
import Button from '../atom/Button'
import Container from '../atom/Container'
import CustomImage from '../atom/CustomImage'

function Provide() {
    return (
        <div>
            <Container>
                <div className='provide  w-[100%] pt-[100px] pb-[50px] 2xl:flex 2xl:flex-nowrap 2xl:justify-between 2xl:gap-[0px] xl:flex xl:flex-nowrap xl:justify-between xl:gap-[0px] lg:flex lg:flex-nowrap lg:justify-between lg:gap-[0px] md:flex md:flex-wrap md:justify-between md:gap-[50px] sm:flex sm:flex-wrap sm:justify-between sm:gap-[50px] flex flex-wrap gap-[50px] '>
                    <div className="left 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] w-[100%] ">
                        <div className='pb-[20px]'  data-aos="fade-up" data-aos-duration="1000"><Heading level='2'>Provide best <span className='text-[40px] font-semibold text-yellow-500'>education <br /> services</span> for you</Heading></div>
                        <p className='text-[16px] pb-[15px]'  data-aos="fade-up" data-aos-duration="1000">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className='text-[16px]  pb-[50px]'  data-aos="fade-up" data-aos-duration="1000">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <div className="" data-aos="fade-right" data-aos-duration="1000" >
                        <Button variant='button1'>Learn More</Button>
                        </div>
                    </div>
                    <div className="right 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] w-[100%]" data-aos="zoom-in">
                        <CustomImage src='/assits/image/abut2.jpg' variant='five'>
                        </CustomImage>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Provide