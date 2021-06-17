/**
 * BLOCK: last-death
 * @since 1.1.0
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { SelectControl, PanelBody } = wp.components;
const { InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;

import ServerSideRender from '@wordpress/server-side-render';

/**
 * Register: Gutenberg Block.
 */
registerBlockType( 'lezwatchtv/about-show', {

	title: __( 'About This Show (LezWatchTV)' ),
	// https://fontawesome.com/icons/birthday-cake?style=solid
	icon: <svg aria-hidden="true" data-prefix="fal" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-tv-retro fa-w-16 fa-3x"><path fill="currentColor" d="M416 243v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm96-100v288c0 26.5-21.5 48-48 48h-16v33h-16l-11-33H91l-11 33H64v-33H48c-26.5 0-48-21.5-48-48V143c0-26.5 21.5-48 48-48h160.1l-74.8-67.1c-6.6-5.9-7.2-16-1.3-22.6 5.9-6.6 16-7.2 22.6-1.3L256 95h.8L357.3 4.1c6.6-5.9 16.7-5.4 22.6 1.2 5.9 6.6 5.4 16.7-1.2 22.6L304.5 95H464c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V143zm-256 49c-68.8 0-106.2 2.3-125.3 4.3-1.3 14.4-2.7 41.5-2.7 90.7 0 50.5 1.4 78 2.7 92.8 19.2 1.9 56.5 4.2 125.3 4.2s106.1-2.3 125.3-4.2c1.3-14.7 2.7-42.3 2.7-92.8 0-49.2-1.4-76.3-2.7-90.7-19.1-2-56.5-4.3-125.3-4.3m0-32c128 0 152 8 152 8s8 0 8 119c0 121-8 121-8 121s-24 8-152 8-152-8-152-8-8 0-8-121c0-119 8-119 8-119s24-8 152-8zm204 159h8c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12z" class=""></path></svg>,
	category: 'lezwatchtv',
	keywords: [
		__( 'lezwatchtv' ),
		__( 'show' ),
	],
	align: true,
	className: false,
	attributes: {
		showname: {
			type: 'string',
			default: 'batwoman',
		}
	},
	html: false,

	/**
	 * Editor View
	 */
	edit: props => {

		const { attributes: { placeholder }, setAttributes } = props;
		getAuthors

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ 'About This Show Settings' }>
						<TextControl
							label={ 'TV Show Name' }
							value={ props.attributes.showname }
							onChange={ ( value ) => props.setAttributes( { showname: value } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<ServerSideRender
					block='lezwatchtv/about-show'
					attributes={ props.attributes }
				/>
			</Fragment>
		);
	},

	/**
	 * Front End View
	 */
	save() {
		// Rendering in PHP
		return null;
	},
} );
