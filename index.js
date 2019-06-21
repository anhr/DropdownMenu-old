/**
 * node.js version of the menu
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
loadScript.sync( '../../menu.css', {

	//style rel="stylesheet"
	tag: {

		name: 'style',
		attribute: {

			name: 'rel',
			value: 'stylesheet',

		}
	}

});

export function create( arrayMenu, options ) {

	options = options || {};

	//create container element
	options.elContainer = options.elContainer || document.createElement( 'div' );
	if ( options.elContainer.className === '' )
		options.elContainer.className = 'container';
	if ( options.id !== undefined )
		options.elContainer.id = options.id;

	options.elParent = options.elParent || document.querySelector( 'body' );

	//create menu element
	var elMenu = document.createElement( 'menu' );
	elMenu.className = 'controls';
	if ( options.menu ) {
		if ( options.menu.onmouseout )
			elMenu.onmouseout = options.menu.onmouseout;
		if ( options.menu.onmousemove )
			elMenu.onmousemove = options.menu.onmousemove;
		if ( options.menu.onmouseout )
			elMenu.onmouseout = options.menu.onmouseout;
	}
		/*
	<menu class="controls" onmouseout="threeDSE.onControlsMouseOut()" onmousemove="threeDSE.onControlsMouseMove()">
		<span id="menuSpanStereoEffects">
			<span class="menuButton" id="menuButtonStereoEffects" title="Stereo effects"
				  onmouseover="threeDSE.onMenuButtonOver(event)" onmouseout="threeDSE.onMenuButtonOut(event)">
				<span>⚭</span>
				<span class="dropdown-child" title="">
					<nobr>Подраздел 1.1</nobr>
					<nobr>Подраздел 1.2</nobr>
				</span>
			</span>
		</span>
		<span id="menuSpan2">
			<span class="menuButton" id="menuButton2" title="2"
				  onmouseover="threeDSE.onMenuButtonOver(event)" onmouseout="threeDSE.onMenuButtonOut(event)">
				<span>2</span>
				<span class="dropdown-child" title="">
					<nobr>Подраздел 2.1</nobr>
					<nobr>Подраздел 2.2</nobr>
				</span>
			</span>
		</span>
		<span class="menuButton right" id="menuButtonFullScreen" onclick="threeDSE.onFullScreen()"></span>
	</menu>
		 */

	arrayMenu.forEach( function ( menuItem ) {
		var elSpan = document.createElement( 'span' );

		//Create menuButton class element
		var elMenuButton = document.createElement( 'span' );
		elMenuButton.className = 'menuButton';

		var name;
		if ( typeof menuItem === 'string' )
			name = menuItem;
		else {

			name = menuItem.name;

			if ( menuItem.id )
				elMenuButton.id = menuItem.id;
			if ( menuItem.title )
				elMenuButton.title = menuItem.title;
			if ( menuItem.onmouseover )
				elMenuButton.onmouseover = menuItem.onmouseover;
			if ( menuItem.onmouseout )
				elMenuButton.onmouseout = menuItem.onmouseout;

		}

		//Create name span
		var elName = document.createElement( 'span' );
		elName.innerHTML = name;
		elMenuButton.appendChild( elName );

		elSpan.appendChild( elMenuButton );
		elMenu.appendChild( elSpan );
	} );
	options.elContainer.appendChild( elMenu );
	options.elParent.appendChild( options.elContainer );

}
