import * as fs from 'fs';
import { paths } from './paths';

/**
 * Define the Icon object constructor
 * to build the icon object schema
 * required by the theme
 * @param path {String} is the filename path
 */
class ColorIcon {
	constructor(path: string) {
		const iconName = '_file_' + path;
		this[iconName] = {
			iconPath: `./svgs/${path}.svg`,
		};
	}
}
class GrayscaleIcon {
	constructor(path: string) {
		const iconName = '_file_' + path;
		this[iconName] = {
			iconPath: `./svgs-grayscale/${path}.svg`,
		};
	}
}

/**
 * Remove the extension from a file name (eg. "file.svg")
 * @param fileName {string} Filename string
 */
const removeFileExtension = (fileName: string) => {
	return fileName.replace(/\.[^/.]+$/, '');
};

/**
 * Get all the svg icons from the svgs
 * source path and remove the file extension
 */
const iconsListColors: string[] = fs.readdirSync(paths.svgs).map((icon) => {
	if (icon.match(/\.svg$/i)) {
		return removeFileExtension(icon);
	}

	return '';
});
const iconsListGrayscale: string[] = fs
	.readdirSync(paths.svgsGrayscale)
	.map((icon) => {
		if (icon.match(/\.svg$/i)) {
			return removeFileExtension(icon);
		}
		return '';
	});

/**
 * For each files found in `iconsList`
 * call the Icon contructor and generate the
 * full json theme
 */
export const iconsColors = iconsListColors.reduce(
	(acc, icon: string) => {
		const iconFromSvg = new ColorIcon(icon);
		acc.iconDefinitions = {
			...acc.iconDefinitions,
			...iconFromSvg,
		};
		return acc;
	},
	{ iconDefinitions: {} },
);
export const iconsGrayscale = iconsListGrayscale.reduce(
	(acc, icon: string) => {
		const iconFromSvg = new GrayscaleIcon(icon);
		acc.iconDefinitions = {
			...acc.iconDefinitions,
			...iconFromSvg,
		};
		return acc;
	},
	{ iconDefinitions: {} },
);
