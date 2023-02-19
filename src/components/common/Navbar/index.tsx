import { Logo } from 'components/common/Logo';
import { NavLink } from './NavLink';
import { Button } from '../Buttons/Button';
import { scrollIntoView } from 'helpers/scrollToView';
import { FC, useEffect, useRef, useState } from 'react';
import { NavItem } from './NavItem';
import { Toggler } from './Toggler';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface Props {
	hasProjects: boolean;
}

const Navbar: FC<Props> = ({ hasProjects }) => {
	const navRef = useRef<HTMLElement>(null);
	const [showMenu, setShowMenu] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			if (!navRef.current) {
				return;
			}
			const navHeight = navRef.current.offsetHeight;
			if (window.pageYOffset > navHeight) {
				navRef.current.classList.add('bg-white', 'shadow-sm');
			} else {
				navRef.current.classList.remove('bg-white', 'shadow-sm');
			}
		};
		scrollHandler();
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<header ref={navRef} className="fixed top-0 left-0 z-10 w-full h-24 transition py-7 lg:h-auto">
			<motion.div
				className="container flex items-center justify-between"
				initial={{
					y: -40,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.5,
					ease: 'easeOut',
				}}
			>
				<Logo />
				<ul
					className={clsx(
						'absolute left-0 flex flex-col items-center w-full text-black top-24 h-nav bg-body-bg',
						'lg:static lg:flex-row lg:w-auto lg:h-auto',
						{
							'bg-transparent pointer-events-none lg:pointer-events-auto': !showMenu,
						},
					)}
				>
					<NavItem showMenu={showMenu}>
						<NavLink to="about">About</NavLink>
					</NavItem>
					<NavItem showMenu={showMenu} className="delay-150">
						<NavLink to="experience">Experience</NavLink>
					</NavItem>
					<NavItem showMenu={showMenu} className="delay-75">
						<NavLink to="work">Work</NavLink>
					</NavItem>
					{hasProjects && (
						<NavItem showMenu={showMenu} className="delay-100">
							<NavLink to="projects">Projects</NavLink>
						</NavItem>
					)}
					<NavItem showMenu={showMenu} className="delay-200">
						<Button onClick={() => scrollIntoView('contact')}>Contact me</Button>
					</NavItem>
				</ul>
				<Toggler showMenu={showMenu} setShowMenu={() => setShowMenu(!showMenu)} />
			</motion.div>
		</header>
	);
};

export { Navbar };
