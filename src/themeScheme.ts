import { fileExtensions } from './declarations/fileExtensions';
import { fileFolders } from './declarations/fileFolders';
import { fileNames } from './declarations/fileNames';
import { folderNames } from './declarations/folderNames';
import { folderNamesExpanded } from './declarations/folderNamesExpanded';
import { languageIds } from './declarations/languageIds';
import { iconsColors, iconsGrayscale } from './iconsDefinition';

/**
 * Define the icon theme json schema required
 * by vscode extensions api
 */

export const Colors = {
	// Push the generated list of the icons in colors
	...iconsColors,
	// Puch default folders and files icons
	...fileFolders,
	// Push file extension declarations
	fileExtensions,
	// Push file names declarations
	fileNames,
	// Push folder names declarations
	folderNames,
	// Push expanded folder names declarations
	folderNamesExpanded,
	// Disable arrows beside folders
	hidesExplorerArrows: true,
	// Push languages ids declarations
	languageIds,
};

export const Grayscale = {
	// Push the generated list of the icons in grayscale
	...iconsGrayscale,
	// Puch default folders and files icons
	...fileFolders,
	// Push file extension declarations
	fileExtensions,
	// Push file names declarations
	fileNames,
	// Push folder names declarations
	folderNames,
	// Push expanded folder names declarations
	folderNamesExpanded,
	// Disable arrows beside folders
	hidesExplorerArrows: true,
	// Push languages ids declarations
	languageIds,
};
