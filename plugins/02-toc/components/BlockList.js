const { withSelect } = wp.data;

import BlockItem from "./BlockItem";

const BlockList = ( { blocks } ) => {
	console.log( 'blocks', blocks )
	return (
		<ul className='jsforwp-toc'>
			{ blocks.map( block => (
				<BlockItem key={ block.clientId } block={ block }/>
			) ) }
		</ul>
	)
}

export default withSelect( select => {
	return {
		blocks: select( 'core/block-editor' ).getBlocks()
	}
} )( BlockList );
