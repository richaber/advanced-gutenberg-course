import BlockButton from "./BlockButton";

const BlockItem = ( { block } ) => {
	let childBlocks = null;

	if ( block.innerBlocks ) {
		childBlocks = block.innerBlocks.map( innerBlock => (
			<BlockItem key={ innerBlock.clientId } block={ innerBlock }/>
		) );
	}

	return (
		<li data-tocid={ block.clientId }>
			<BlockButton block={ block } />
			{ typeof childBlocks != "undefined" && childBlocks != null && childBlocks.length > 0 ? <ul>{ childBlocks }</ul> : null }
		</li>
	);

};

export default BlockItem;
