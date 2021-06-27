import React from "react";
import {Image} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {EThemeMode} from "../../features/types";
import darkModeIcon from "../../assets/icons/dark_mode_black_24dp.svg"
import lightModeIcon from "../../assets/icons/light_mode_white_24dp.svg"
import {darkThemeMode, lightThemeMode} from "../../features/actions";

const ThemeModeToggler: React.FC = () => {
	const themeMode = useAppSelector((state) => state.ThemeModeReducer)
	const dispatch = useAppDispatch()
	return (
			<section className="theme-mode d-flex justify-content-center align-items-center" style={{cursor: "pointer"}} onClick={() => {
				if (themeMode ===  EThemeMode.light) {
					dispatch(darkThemeMode())
				} else {
					dispatch(lightThemeMode())
				}
			}}>
				<Image src={themeMode === EThemeMode.light ? darkModeIcon : lightModeIcon}/>
			</section>
	);
}

export default ThemeModeToggler;
