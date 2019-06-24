/**
 * node.js version of DropdownMenu
 * 
 * @author Andrej Hristoliubov https://anhr.github.io/AboutMe/
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

//Please download https://github.com/anhr/loadScriptNodeJS into ../loadScriptNodeJS folder
import loadScript from '../loadScriptNodeJS/loadScript.js';
var optionsStyle = {

	//style rel="stylesheet"
	tag: 'style'

}
//Attention! Load menu.css file before other css files for correctly priority of the styles
loadScript.sync( '../../styles/menu.css', optionsStyle );
//loadScript.sync( '../../styles/Decorations/default.css', optionsStyle );
loadScript.sync( '../../styles/Decorations/transparent.css', optionsStyle );
loadScript.sync( '../../styles/Decorations/gradient.css', optionsStyle );

export function create( arrayMenu, options ) {

	options = options || {};
	options.elParent = options.elParent || document.querySelector( 'body' );

	//create menu element
	var elMenu = document.createElement( 'menu' );
	if ( options.elParent.classList.contains( "container" ) )
		elMenu.className = 'controls';
	if ( options.menu ) {
		if ( options.menu.onmouseout )
			elMenu.onmouseout = options.menu.onmouseout;
		if ( options.menu.onmousemove )
			elMenu.onmousemove = options.menu.onmousemove;
		if ( options.menu.onmouseout )
			elMenu.onmouseout = options.menu.onmouseout;
	}
	function displayControls() {

		elMenu.style.opacity = 1;
		clearTimeout( timeoutControls );
		timeoutControls = setTimeout( function () {

			elMenu.style.opacity = 0;

		}, 5000 );

	}
	if ( options.canvas ) {

		elMenu.style.opacity = 0;
		options.canvas.onmouseout = function ( event ) {

			elMenu.style.opacity = 0;

		}
		options.canvas.onmousemove = function ( event ) {

			displayControls();
//			elMenu.style.opacity = 1;

		}
/*
		elMenu.onmouseout = function ( event ) {

			elMenu.style.opacity = 0;

		}
*/
		elMenu.onmousemove = function ( event ) {

			displayControls();
//			elMenu.style.opacity = 1;

		}

	}
	options.elParent.appendChild( elMenu );

//	var menuButtonStyle, top = 0;
	arrayMenu.forEach( function ( menuItem ) {

		var dropdownChild = 'dropdown-child';
		var elSpan = document.createElement( 'span' );
/*
		function getMenuButtonBorderWidth() {

			if ( menuButtonStyle === undefined )
				menuButtonStyle = getComputedStyle( elMenuButton );
			var borderWidth = parseInt( menuButtonStyle['border-top-width'] );

			//checking for compatibility with Firefox
			if ( isNaN( borderWidth ) ) {
				borderWidth = 0;

				elDropdownChild.style.borderWidth = '1px';
//				elDropdownChild.style.top = '-1px';
				elMenuButton.style.borderWidth = '1px';
				top = -1;

			}

//			return borderWidth;
			return 0;

		}
*/
		function moveUpLeft( drop ) {

			setTimeout( function () {

				var display = elDropdownChild.style.display;
//				var borderWidth = getMenuButtonBorderWidth();
				elDropdownChild.style.display = 'block';
				if ( drop.up )
					elDropdownChild.style.top = '-' + ( elDropdownChild.offsetHeight/* + borderWidth*/ ) + 'px';
				else elDropdownChild.style.top = ( elMenuButton.offsetHeight/* - borderWidth + top*/ -1 ) + 'px';
				if ( drop.left )
					elDropdownChild.style.left = ( elMenuButton.offsetWidth - elDropdownChild.offsetWidth/* - borderWidth*/ ) + 'px';
				elDropdownChild.style.display = display;//'none';

			}, 0 );

		}

/*
		function displayDropdownChild( elDropdownChild, display ) {

			if ( elDropdownChild === null )
				return;
			if ( !elDropdownChild.classList.contains( dropdownChild ) ) {

				console.error( 'Invalid class of elDropdownChild: ' + elDropdownChild.className );
				return;

			}

			if ( display ) {
				elDropdownChild.style.display = 'block';
				elDropdownChild.style.opacity = 1;
			} else {
				elDropdownChild.style.display = 'none';
				elDropdownChild.style.opacity = 0;
			}

		}
*/

		//Create menuButton class element
		var elMenuButton = document.createElement( 'span' );
		elMenuButton.className = 'menuButton' +
//			( options.decorations === undefined ? 'Default' : options.decorations ) +
			( options.decorations === undefined ? '' : ' menuButton' + options.decorations ) +
			( menuItem.right ? ' right' : '' );//move menu item to the right border of the parent element
/*
		elMenuButton.onmouseover = function ( event ) {

			var elDropdownChild = event.currentTarget.querySelector( '.' + dropdownChild );
			if ( elDropdownChild === null )
				return;
			displayDropdownChild( elDropdownChild, true );

		}
		elMenuButton.onmouseout = function ( event ) {

			var elDropdownChild = event.currentTarget.querySelector( '.' + dropdownChild );
			displayDropdownChild( elDropdownChild );

		}
*/
		if ( menuItem.onclick !== undefined )
			elMenuButton.onclick = menuItem.onclick;
		if ( menuItem.id !== undefined )
			elMenuButton.id = menuItem.id;
		elSpan.appendChild( elMenuButton );

		var name;
		if ( typeof menuItem === 'string' )
			name = menuItem;
		else {

			name = menuItem.name;

			if ( menuItem.id )
				elMenuButton.id = menuItem.id;
			if ( menuItem.title )
				elMenuButton.title = menuItem.title;
/*
			if ( menuItem.onmouseover )
				elMenuButton.onmouseover = menuItem.onmouseover;
			if ( menuItem.onmouseout )
				elMenuButton.onmouseout = menuItem.onmouseout;
*/

		}

		//Create name span
		var elName = document.createElement( 'span' );
		elName.innerHTML = name;
		elMenuButton.appendChild( elName );

		//Create dropdown-child items
		if ( menuItem.items ) {

			var elDropdownChild = document.createElement( 'span' );
//			elDropdownChild.className = dropdownChild;
			elDropdownChild.className = dropdownChild + ' ' + dropdownChild + ( options.decorations === undefined ? 'Default' : options.decorations );
			elDropdownChild.title = '';
			elMenuButton.appendChild( elDropdownChild );

			//for compatibility with firefox
//			getMenuButtonBorderWidth();

			menuItem.items.forEach( function ( itemItem ) {

				//Create name span
				var elName = document.createElement( 'nobr' );

				var name;
				if ( typeof itemItem === 'string' )
					name = itemItem;
				else {

					name = itemItem.name;
					if ( itemItem.onclick )
						elName.onclick = function ( event ) {

//							displayDropdownChild( event.currentTarget.parentElement );
							itemItem.onclick( event );
							
						}

				}

				elName.innerHTML = name;
				elDropdownChild.appendChild( elName );

			} );

			if ( typeof menuItem.drop === 'object' ) {

				moveUpLeft( menuItem.drop );

			} else {

				switch ( menuItem.drop ) {

					case 'up':
						moveUpLeft( {

							up: true,

						} );
						break;
					case 'left':
						moveUpLeft( {

							left: true,

						} );
						break;
/*
					case Object:
						setTimeout( function () {

							elDropdownChild.style.display = 'block';
							elDropdownChild.style.left = ( elMenuButton.offsetWidth - elDropdownChild.clientWidth ) + 'px';
							elDropdownChild.style.display = 'none';

						}, 0 );
						break;
*/
					case undefined:
						setTimeout( function () {

							elDropdownChild.style.left = '-' + elMenuButton.clientWidth + 'px';
							elDropdownChild.style.top = ( elMenuButton.offsetHeight/* - getMenuButtonBorderWidth()*/ - 1 ) + 'px';

						}, 0 );
						break;
					default: console.error( 'Invalid menuItem.drop: ' + menuItem.drop );

				}

			}

		}

		elMenu.appendChild( elSpan );
	} );
}
