import * as fs from 'fs-extra';
import { paths } from './paths';
import { Colors, Grayscale } from './themeScheme';

/**
 * Build the icons theme and write the
 * theme file to the build path.
 */
const writeTheme = (scheme: object, name: string) => {
	fs.writeFile(
		// Pass the theme output path and filename
		`${paths.build}/moxer-icons-${name}.json`,
		// Pass the icon theme scheme
		JSON.stringify(scheme, null, 3),
		(err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(`Moxer Icons ${name} has been generated`);
		},
	);
};

writeTheme(Colors, 'colors');
writeTheme(Grayscale, 'grayscale');
