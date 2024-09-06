import { Avatar } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    CaretDown,
    CaretUp,
} from "@phosphor-icons/react";
import { logout } from "../../lib/reducer/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';

const Sidebar = ({ isSidebarCollapsed, toggleSidebar }) => {
    const dispatch = useDispatch()
    const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
    const location = useLocation();
    const whenActive = location.pathname;
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate()
    
    const user = Cookies.get('user');
    const parsedUser = JSON.parse(user); // Parse the string into an object
    console.log(parsedUser.first_name);   // Now you can access first_name
    // if (user) {
    // } else {
    //     console.log('User not found in cookies');
    // }
    

    const toggleUserManagementDropdown = (event) => {
        event.preventDefault();
        setIsUserManagementOpen(!isUserManagementOpen);
    };

    const handleLogout = () => {
        console.log(token);
        
       if (token) {
           dispatch(logout())
           navigate('/auth/login')
       }
    }

    const mainNavlink = [
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_394_2066)">
                        <ellipse cx="14.7917" cy="5.20833" rx="3.54167" ry="3.54167" stroke="white" strokeWidth="1.5" />
                        <circle cx="5.20866" cy="5.20833" r="3.54167" stroke="white" strokeWidth="1.5" />
                        <circle cx="14.7917" cy="14.7917" r="3.54167" stroke="white" strokeWidth="1.5" />
                        <ellipse cx="5.20866" cy="14.7917" rx="3.54167" ry="3.54167" stroke="white" strokeWidth="1.5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_394_2066">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            name: "Dashboard",
            path: "/",
        },
        {
            icon: (
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 4.16667H11.3333C12.0237 4.16667 12.5833 4.72631 12.5833 5.41667V6.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.1069 17.357L13.5765 16.8267V16.8267L14.1069 17.357ZM13.4165 2.41667C13.8307 2.41667 14.1665 2.08088 14.1665 1.66667C14.1665 1.25245 13.8307 0.916668 13.4165 0.916668V2.41667ZM14.3332 8.33333V11.6667H15.8332V8.33333H14.3332ZM8.4165 17.5833H7.58317V19.0833H8.4165V17.5833ZM1.6665 11.6667V4.16667H0.166504V11.6667H1.6665ZM7.58317 17.5833C5.99062 17.5833 4.87166 17.5817 4.02553 17.468C3.20099 17.3571 2.74872 17.1523 2.42314 16.8267L1.36248 17.8874C2.01322 18.5381 2.83478 18.8214 3.82566 18.9546C4.79497 19.0849 6.03302 19.0833 7.58317 19.0833V17.5833ZM0.166504 11.6667C0.166504 13.2168 0.164911 14.4549 0.295231 15.4242C0.428451 16.4151 0.711753 17.2366 1.36248 17.8874L2.42314 16.8267C2.09757 16.5011 1.89271 16.0489 1.78185 15.2243C1.6681 14.3782 1.6665 13.2592 1.6665 11.6667H0.166504ZM14.3332 11.6667C14.3332 13.2592 14.3316 14.3782 14.2178 15.2243C14.107 16.0489 13.9021 16.5011 13.5765 16.8267L14.6372 17.8874C15.2879 17.2366 15.5712 16.4151 15.7044 15.4242C15.8348 14.4549 15.8332 13.2168 15.8332 11.6667H14.3332ZM8.4165 19.0833C9.96665 19.0833 11.2047 19.0849 12.174 18.9546C13.1649 18.8214 13.9865 18.5381 14.6372 17.8874L13.5765 16.8267C13.251 17.1523 12.7987 17.3571 11.9741 17.468C11.128 17.5817 10.0091 17.5833 8.4165 17.5833V19.0833ZM13.4165 0.916668H3.4165V2.41667H13.4165V0.916668ZM3.4165 7.41667H13.4165V5.91667H3.4165V7.41667ZM0.166504 4.16667C0.166504 5.96159 1.62158 7.41667 3.4165 7.41667V5.91667C2.45001 5.91667 1.6665 5.13317 1.6665 4.16667H0.166504ZM3.4165 0.916668C1.62158 0.916668 0.166504 2.37174 0.166504 4.16667H1.6665C1.6665 3.20017 2.45001 2.41667 3.4165 2.41667V0.916668ZM15.8332 8.33333C15.8332 6.99865 14.7512 5.91667 13.4165 5.91667V7.41667C13.9228 7.41667 14.3332 7.82707 14.3332 8.33333H15.8332Z" fill="white" />
                    <path d="M10.5 10.8333L5.5 10.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 14.1667L5.5 14.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            name: "Courses",
            path: "#",
            subLinks: [
                {
                    name: "Nahw",
                    path: "/courses/nahw",
                },
                {
                    name: "At-Tawheed",
                    path: "/#",
                },
                {
                    name: "Al Fiqh",
                    path: "/#",
                },
                {
                    name: "Hadith",
                    path: "/#",
                },
            ],
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.99984" cy="5" r="3.33333" stroke="white" strokeWidth="1.5" />
                    <path d="M15 7.5C16.3807 7.5 17.5 6.56726 17.5 5.41666C17.5 4.26607 16.3807 3.33333 15 3.33333" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M5 7.5C3.61929 7.5 2.5 6.56726 2.5 5.41666C2.5 4.26607 3.61929 3.33333 5 3.33333" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <ellipse cx="10" cy="14.1667" rx="5" ry="3.33333" stroke="white" strokeWidth="1.5" />
                    <path d="M16.6665 15.8333C18.1284 15.5128 19.1665 14.7009 19.1665 13.75C19.1665 12.7991 18.1284 11.9873 16.6665 11.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3.3335 15.8333C1.87162 15.5128 0.833496 14.7009 0.833496 13.75C0.833496 12.7991 1.87162 11.9873 3.3335 11.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            name: "Instructor",
            path: "/instructor",
            digit: "10",
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_79_399)">
                        <path d="M18.3332 18.3333H1.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M17.5 18.3333V12.0833C17.5 11.393 16.9404 10.8333 16.25 10.8333H13.75C13.0596 10.8333 12.5 11.393 12.5 12.0833V18.3333" stroke="white" strokeWidth="1.5" />
                        <path d="M12.5 18.3333V4.16667C12.5 2.98816 12.5 2.3989 12.1339 2.03279C11.7678 1.66667 11.1785 1.66667 10 1.66667C8.82149 1.66667 8.23223 1.66667 7.86612 2.03279C7.5 2.3989 7.5 2.98816 7.5 4.16667V18.3333" stroke="white" strokeWidth="1.5" />
                        <path d="M7.5 18.3333V7.91666C7.5 7.2263 6.94036 6.66666 6.25 6.66666H3.75C3.05964 6.66666 2.5 7.2263 2.5 7.91666V18.3333" stroke="white" strokeWidth="1.5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_79_399">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            name: "Performance",
            path: "/performance",
            digit: "10",
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_79_404)">
                        <ellipse cx="12.5002" cy="3.33332" rx="1.66667" ry="1.66667" stroke="white" strokeWidth="1.5" />
                        <path d="M9.16667 13.3333V12.5219C9.16667 12.4231 9.16667 12.3737 9.16488 12.3266C9.13936 11.6509 8.84122 11.0143 8.33849 10.5622C8.3034 10.5306 8.26543 10.499 8.18958 10.4358C8.07842 10.3431 8.02285 10.2968 7.97983 10.2554C7.3412 9.64065 7.29552 8.63356 7.87587 7.96351C7.91496 7.91838 7.96611 7.86722 8.06843 7.76491L8.34279 7.49055C9.13656 6.69678 8.87764 5.35232 7.84585 4.91013C7.36818 4.70541 6.82054 4.74758 6.37984 5.02302L3.75 6.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M2.5 12.9167H2.81557C3.94745 12.9167 5.03297 12.467 5.83333 11.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M10.4165 8.33334C11.2279 8.60381 12.1051 8.60381 12.9165 8.33334" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16.2405 18.3333H2.5722C2.072 18.3333 1.6665 17.9278 1.6665 17.4276C1.6665 16.9877 1.98269 16.6113 2.41608 16.5355L15.8798 14.1794C17.1603 13.9553 18.3332 14.9407 18.3332 16.2407C18.3332 17.3964 17.3963 18.3333 16.2405 18.3333Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M15.9348 8.3511L15.1931 8.23984L15.9348 8.3511ZM18.4804 6.56878C18.8866 6.48755 19.15 6.09243 19.0688 5.68626C18.9875 5.28009 18.5924 5.01667 18.1862 5.09791L18.4804 6.56878ZM15.7417 14.6946L16.6765 8.46235L15.1931 8.23984L14.2583 14.4721L15.7417 14.6946ZM16.6765 8.46235C16.8188 7.51412 17.5402 6.75682 18.4804 6.56878L18.1862 5.09791C16.6262 5.40992 15.4291 6.66648 15.1931 8.23984L16.6765 8.46235Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_79_404">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            name: "Lead board",
            path: "/lead-board",
            digit: "10",
        },
    ];

    return (
        <aside
            className={`rounded-xl border border-gray-300 bg-glass p-4 flex flex-col justify-between text-white transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'
                }`} onMouseEnter={toggleSidebar}
        >
            <div className="space-y-4">
                <div className={`flex ${isSidebarCollapsed ? 'justify-center' : 'gap-2 items-center'}`}>
                    <Avatar size={isSidebarCollapsed ? "sm" : "md"} src='' name={`${parsedUser.first_name} ${parsedUser.last_name}`} />
                    {!isSidebarCollapsed && (
                        <div>
                            <p className="text-sm">{`${parsedUser.first_name} ${parsedUser.last_name}`}</p>
                            <p className="bg-white rounded-md p-1 text-black text-xs text-center w-20">Middle Class</p>
                        </div>
                    )}
                </div>
                <div className="flex flex-col mt-4 gap-1">
                    {mainNavlink.map((item, index) => {
                        const isActive = whenActive === item.path;
                        return (
                            <div key={index}>
                                <div
                                    className={`flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between'} gap-4 p-2 rounded group cursor-pointer ${isActive ? "bg-ihsan" : "hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                                        }`}
                                    onClick={item.subLinks ? toggleUserManagementDropdown : null}
                                >
                                    <Link
                                        to={item.path}
                                        className="flex items-center gap-2 flex-grow"
                                    >
                                        <div className={`${isActive ? "text-urise-main" : ""}`}>
                                            {item.icon}
                                        </div>
                                        {!isSidebarCollapsed && (
                                            <p className={`text-sm ${isActive ? "text-urise-main" : ""}`}>
                                                {item.name}
                                            </p>
                                        )}
                                    </Link>
                                    {!isSidebarCollapsed && item.subLinks && (
                                        <div className="flex-shrink-0">
                                            {isUserManagementOpen ? (
                                                <CaretUp size="20" />
                                            ) : (
                                                <CaretDown size="20" />
                                            )}
                                        </div>
                                    )}
                                </div>
                                {item.subLinks && isUserManagementOpen && !isSidebarCollapsed && (
                                    <div className="ml-8 flex flex-col gap-2">
                                        {item.subLinks.map((subLink, subIndex) => (
                                            <Link key={subIndex} to={subLink.path}>
                                                <ul
                                                    className={`list-disc flex items-center justify-between gap-4 hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50 p-2 rounded ${whenActive === subLink.path
                                                        ? "bg-ihsan "
                                                        : ""
                                                        }`}
                                                >
                                                    <li className="text-sm">{subLink.name}</li>
                                                </ul>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={`space-y-2 cursor-pointer ${isSidebarCollapsed ? 'text-center' : 'p-2'}`}>
                <p className={`flex gap-1 items-center ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_79_460)">
                            <circle cx="9.99984" cy="10" r="8.33333" stroke="white" strokeWidth="1.5" />
                            <path d="M8.4375 7.39581C8.4375 6.53287 9.13706 5.83331 10 5.83331C10.8629 5.83331 11.5625 6.53287 11.5625 7.39581C11.5625 7.96868 11.2542 8.46955 10.7945 8.74154C10.3984 8.97589 10 9.33141 10 9.79165V10.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            <ellipse cx="9.99984" cy="13.3333" rx="0.833333" ry="0.833333" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_79_460">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {!isSidebarCollapsed && 'Help'}
                </p>
                <p className={`flex gap-1 items-center cursor-pointer ${isSidebarCollapsed ? 'justify-center' : ''}`} 
                onClick={handleLogout}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_79_464)">
                            <path d="M12.4985 5.83335C12.4884 4.02083 12.4081 3.03924 11.7678 2.39892C11.0355 1.66669 9.85701 1.66669 7.49998 1.66669L6.66665 1.66669C4.30963 1.66669 3.13111 1.66669 2.39888 2.39892C1.66665 3.13115 1.66665 4.30966 1.66665 6.66669L1.66665 13.3334C1.66665 15.6904 1.66665 16.8689 2.39888 17.6011C3.13111 18.3334 4.30963 18.3334 6.66665 18.3334L7.49998 18.3334C9.85701 18.3334 11.0355 18.3334 11.7678 17.6011C12.4081 16.9608 12.4884 15.9792 12.4985 14.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M7.5 10L18.3333 10M18.3333 10L15.4167 7.5M18.3333 10L15.4167 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_79_464">
                                <rect width="20" height="20" rx="5" transform="matrix(-1 0 0 1 20 0)" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {!isSidebarCollapsed && 'Logout'}
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;

Sidebar.propTypes = {
    isSidebarCollapsed: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};
