"use client"
import { IoIosLogOut, IoMdHome } from 'react-icons/io'
import  './style.css'
import { IoListCircleSharp, IoPieChart } from 'react-icons/io5'
import Link from 'next/link'
import { RiLogoutBoxRFill } from 'react-icons/ri'
import { auth, LogOut } from '../firebase/firebaseauth'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

export default function Navbar(){
 
    let user = auth.currentUser
    return(
        <>
             

                <nav>
               
                   <div className='navbar'>
                        <ul className='list'>
                        <Link href={'/homes'}>
                            <li  >
                            <IoMdHome className='icon' size={25} style={{textAlign: 'center',position: 'relative',left: '10px'}} />
                            Home

                            </li>
                            </Link>

                            <Link href={'/expensesummary'}>
                            <li> <IoListCircleSharp size={25} style={{textAlign: 'center',position: 'relative',left: '20px'}}/>
                            summary
                            </li>
                            </Link>

                            <Link href={'/chart'}>
                            <li ><IoPieChart size={25} style={{textAlign: 'center',position: 'relative',left: '20px'}}/>
                            Analyize
                            </li>
                            </Link>

                            <Link href={'/login'} onClick={LogOut}>
                            <li ><RiLogoutBoxRFill
                            size={25} style={{textAlign: 'center',position: 'relative',left: '10px'}}/>
                            logout
                            </li>
                            </Link>

                        </ul>
                   </div>
               
               
               
               </nav>
             
        
        
        </>
    )
}



















// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import './style.css';
// import { Button, Drawer, IconButton, ThemeProvider, createTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// // import { auth, signOutExpencConverterUser } from '@/firebase/firebase.auth';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useRouter, usePathname } from 'next/navigation'; // Import usePathname
// import { onAuthStateChanged, User } from 'firebase/auth';
// import { auth, LogOut } from '../firebase/firebaseauth';
// // import { useAuth } from '@/firebase/firebase.auth'; // Assuming you have a hook for authentication

// export default function Sidebar() {
//     const useAuth = () => {
//         const [user, setUser] = useState<User | null>(null);
//         const [loading, setLoading] = useState(true);
    
//         useEffect(() => {
//             const unsubscribe = onAuthStateChanged(auth, (user) => {
//                 setUser(user); // Set the user state to the authenticated user
//                 setLoading(false); // Loading is done
//             });
    
//             // Cleanup subscription on unmount
//             return () => unsubscribe();
//         }, []);
    
//         return { user, loading };
//     };
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//     const router = useRouter();
//     const pathname = usePathname(); // Get current pathname

//     // Get user authentication state (assuming you have a custom hook)
//     const { user } = useAuth(); // Replace with your actual auth hook

//     // Custom dark theme
//     const darkTheme = createTheme({
//         palette: {
//             mode: 'dark',
//             background: {
//                 paper: '#121212',
//             },
//             primary: {
//                 main: '#bb86fc',
//             },
//             secondary: {
//                 main: '#03dac6',
//             },
//             warning: {
//                 main: '#ff9800',
//             },
//             error: {
//                 main: '#cf6679',
//             },
//             text: {
//                 primary: '#ffffff',
//                 secondary: '#aaaaaa',
//             },
//         },
//     });

//     // Toggle drawer for mobile
//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     // Handle Logout
//     const handleLogout = async () => {
//         try {
//             await LogOut(); // Call the sign-out function
//             router.push('/login'); // Redirect to the login page after logout
//         } catch (error) {
//             console.error("Logout error:", error); // Log any errors
//         }
//     };

//     // Sidebar content
//     const sidebarContent = (
//         <nav className={"sidebar"}>
//             <h2 className={"title"}>All Expenses</h2>
//             <ul className={"navList"}>
//                 {user ? ( // Only show links if user is authenticated
//                     <>
//                         <li>
//                             <Button 
//                                 component={Link} 
//                                 href='/expenselist'

//                                 className={pathname === "/expenselist" ? "active" : ""}
//                             >
//                                 Expenses
//                             </Button>
//                         </li>
//                         <li>
//                             <Button 
//                                 component={Link} 
//                                 href="/home/expensesummary"
//                                 className={pathname === "/expensesummary" ? "active" : ""}
//                             >
//                                 Expenses Summary
//                             </Button>
//                         </li>
//                         <li>
//                             <Button 
//                                 component={Link} 
//                                  href='/expenseadd'
//                                 className={pathname === "/addexpense" ? "active" : ""}
//                             >
//                                 Add New +
//                             </Button>
//                         </li>
//                     </>
//                 ) : (
//                     <p className="no-data-message">You are logged out. Please log in!</p> // Message when user is not authenticated
//                 )}
//                 <li>
//                     <Button
//                         onClick={handleLogout}
//                         className={"navLink"}
//                         disabled={!user} // Disable logout if user is not authenticated
//                     >
//                         Logout
//                     </Button>
//                 </li>
//             </ul>
//         </nav>
//     );

//     return (
//         <ThemeProvider theme={darkTheme}>
//             {isMobile ? (
//                 <>
//                     <IconButton
//                         color="inherit"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ position: 'absolute', top: '1rem', left: '1rem', color: '#fff' }}
//                     >
//                         <MenuIcon sx={{ color: "#000" }} />
//                     </IconButton>
//                     <Drawer
//                         variant="temporary"
//                         open={mobileOpen}
//                         onClose={handleDrawerToggle}
//                         sx={{
//                             '& .MuiDrawer-paper': {
//                                 width: '240px',
//                                 backgroundColor: darkTheme.palette.background.paper,
//                             },
//                         }}
//                     >
//                         {sidebarContent}
//                     </Drawer>
//                 </>
//             ) : (
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         '& .MuiDrawer-paper': {
//                             width: '240px',
//                             backgroundColor: darkTheme.palette.background.paper,
//                             boxSizing: 'border-box',
//                         },
//                     }}
//                     open
//                 >
//                     {sidebarContent}
//                 </Drawer>
//             )}
//         </ThemeProvider>
//     );
// }




// // import { useState } from 'react';
// // import Link from 'next/link';
// // import  './style.css';

// // const Navbar = () => {
// //     const [isOpen, setIsOpen] = useState(false);

// //     const toggleSidenav = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     return (
// //         <header className='header'>
// //             <nav className={"navbar"}>
// //                 <div className={"logo"}>My Logo</div>
// //                 <ul className={`navLinks ${isOpen ? "active" : ''}`}>
// //                     <li><Link href="/">Home</Link></li>
// //                     <li><Link href="/about">About</Link></li>
// //                     <li><Link href="/services">Services</Link></li>
// //                     <li><Link href="/contact">Contact</Link></li>
// //                 </ul>
// //                 <div className={"hamburger"} onClick={toggleSidenav}>
// //                     &#9776;
// //                 </div>
// //             </nav>
// //             {isOpen && (
// //                 <div className={"sidenav"}>
// //                     <a href="#" className={"closebtn"} onClick={toggleSidenav}>&times;</a>
// //                     <Link href="/">Home</Link>
// //                     <Link href="/about">About</Link>
// //                     <Link href="/services">Services</Link>
// //                     <Link href="/contact">Contact</Link>
// //                 </div>
// //             )}
// //         </header>
// //     );
// // };

// // export default Navbar;