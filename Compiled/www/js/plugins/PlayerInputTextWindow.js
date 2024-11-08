/*:
 * @plugindesc Plugin untuk menampilkan jendela input teks untuk RPG Maker MV.
 * @author NamaAnda
 *
 * @param Default Variable ID
 * @text ID Variabel Default
 * @type variable
 * @desc ID variabel default untuk menyimpan input teks pemain.
 * @default 1
 *
 * @help
 * Plugin Command:
 *   ShowTextInput <variableId>   # Menampilkan jendela input teks dan menyimpan hasilnya ke variabel yang ditentukan.
 */

class Scene_TextInput extends Scene_MenuBase {
    constructor() {
        super();
    }

    initialize() {
        super.initialize();
    }

    prepare(variableId) {
        this._variableId = variableId;
    }

    create(sceneManager) {
        super.create();
        this._createEditWindow(sceneManager);
        this._createInputWindow(sceneManager);
    }

    _createEditWindow(sceneManager) {
        var actor = new Game_Actor(1); // Buat actor palsu untuk inisialisasi Window_NameEdit
        actor.setName(''); // Set nama awal ke string kosong
        var width = 400;
        var height = 72; // Tinggi jendela yang sesuai untuk satu baris input teks
        var x = (SceneManager._screenWidth - width) / 2;
        var y = (SceneManager._screenHeight - height) / 2;
        this._editWindow = new Window_NameEdit(actor, '', x, y, width);
        this._editWindow.maxLength = 20;
        this.addWindow(this._editWindow);
    }

    _createInputWindow(sceneManager) {
        this._inputWindow = new Window_NameInput();
        this._inputWindow.setEditWindow(this._editWindow);
        this._inputWindow.setHandler('ok', this.onInputOk.bind(this));
        this._inputWindow.setHandler('cancel', this.popScene.bind(this));
        this.addWindow(this._inputWindow);
    }

    onInputOk() {
        var text = this._editWindow.name();
        $gameVariables.setValue(this._variableId, text);
        this.popScene();
    }
}

(function() {
    var parameters = PluginManager.parameters('PlayerInputTextWindow');
    var defaultVariableId = Number(parameters['Default Variable ID'] || 1);

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'ShowTextInput') {
            var variableId = args.length > 0 ? Number(args[0]) : defaultVariableId;
            SceneManager.push(Scene_TextInput);
            SceneManager.prepareNextScene(variableId);
        }
    };

    SceneManager.prepareNextScene = function(variableId) {
        this._scene = new Scene_TextInput();
        this._scene.prepare(variableId);
    };

})();
// Example usage of the PlayerInputTextWindow plugin
// ShowTextInput <variableId>   # Menampilkan jendela input teks dan menyimpan hasilnya ke variabel yang ditentukan.

// Example plugin command usage:
// ShowTextInput 2   # Menampilkan jendela input teks dan menyimpan hasilnya ke variabel 2

// Example event command usage:
// Plugin Command: ShowTextInput 3   # Menampilkan jendela input teks dan menyimpan hasilnya ke variabel 3

// Example script call usage:
// SceneManager.push(Scene_TextInput);
// SceneManager.prepareNextScene(4);   // Menampilkan jendela input teks dan menyimpan hasilnya ke variabel 4

// Example access the input text value:
// var inputValue = $gameVariables.value(variableId);   // Mengambil nilai input teks dari variabel

// Example clear the input text value:
// $gameVariables.setValue(variableId, '');   // Menghapus nilai input teks dari variabel

// Example check if input text is empty:
// var isEmpty = $gameVariables.value(variableId) === '';   // Mengecek apakah input teks kosong

// Example check if input text is not empty:
// var isNotEmpty = $gameVariables.value(variableId) !== '';   // Mengecek apakah input teks tidak kosong

// Example check if input text is equal to a specific value:
// var isMatch = $gameVariables.value(variableId) === 'specific value';   // Mengecek apakah input teks sama dengan nilai tertentu

// Example check if input text is not equal to a specific value:
// var isNotMatch = $gameVariables.value(variableId) !== 'specific value';   // Mengecek apakah input teks tidak sama dengan nilai tertentu

// Example check if input text contains a specific value:
// var containsValue = $gameVariables.value(variableId).includes('specific value');   // Mengecek apakah input teks mengandung nilai tertentu

// Example check if input text does not contain a specific value:
// var doesNotContainValue = !$gameVariables.value(variableId).includes('specific value');   // Mengecek apakah input teks tidak mengandung nilai tertentu