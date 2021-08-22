/*
 * Copyright (c) 2021 istallia
 * Released under the MIT license
 * https://github.com/istallia/TE-commons-naming/blob/main/LICENSE
 */
let FV       = GetFolderView(Ctrl, pt);
let Selected = FV.SelectedItems();
if (Selected && Selected.Count > 0) {
	for (let i = 0; i < Selected.Count; i++) {
		const file_path = Selected.Item(i).Path;
		const file_name = fso.GetFilename(file_path);
		Addons.DebugConsole.info(file_path);
		Addons.DebugConsole.info(file_name);
		Addons.DebugConsole.info('----------------------------------------');
	}
}
