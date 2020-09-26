$(function() {
				$('#dot1, #dot1.1').dotdotdot();
				$('#dot2').dotdotdot();
				$('#rm1, #rm2, #rm3, #rm4').dotdotdot({
					after: 'a.readmore'
				});
				$('#dot4').dotdotdot({
					watch: 'window'
				});
				$('#dot5 .pathname').each(function() {
					var path = $(this).html().split( '/' );
					if ( path.length > 1 ) {
						var name = path.pop();
						$(this).html( path.join( '/' ) + '<span class="filename">/' + name + '</span>' );
						$(this).dotdotdot({
							after: '.filename',
							wrap: 'letter'
						});						
					}
				});
			});