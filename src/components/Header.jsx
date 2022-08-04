import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
    const [show, setShow] = useState(false);
    const {user} = useSelector((state)=>({...state.auth}));
    return (
        <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: '#fao6aa' }}>
            <MDBContainer>
                <MDBNavbarBrand href="/" style={{ color: "#6066000", fontWeight: "600", fontSize: "22px" }} >
                    Tourpedia
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded="false"
                    aria-label='Toogle navigation'
                    onClick={() => setShow(!show)}
                    style={{ color: "#60606" }}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse show={show} navbar>
                    <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
                        <MDBNavbarItem>
                            <MDBNavbarLink href="/">
                                <p className='header-text'>Home</p>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        {user?.result?._id && (
                            <>
                                 <MDBNavbarItem>
                            <MDBNavbarLink href="/addTour">
                                <p className='header-text'>Add Tour</p>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="/dashbaord">
                                <p className='header-text'>Dashboard</p>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                            </>
                        ) }
                        {console.log('hehe',user)}
                        {user?.result?._id ? (
                            <>
                                <MDBNavbarItem>
                                   <MDBNavbarLink href="/logout">
                                       <p className='header-text'>Logout</p>
                                   </MDBNavbarLink>
                               </MDBNavbarItem>
                            </>
                               
                            ) : (
                                <MDBNavbarItem>
                                <MDBNavbarLink href="/login">
                                    <p className='header-text'>Login</p>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            )
                        }
                   
                  
                        
                  
                        

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>

        </MDBNavbar>
    )
}

export default Header