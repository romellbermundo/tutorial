let stdin = process.stdin;
stdin.setRawMode( true );
stdin.resume();
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( key ){
  // ctrl-c ( end of text )
  console.log(`The key is ${key}.`)
  if ( key === '\u0003' ) {
    process.exit();
  }
});

