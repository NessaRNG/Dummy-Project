/*:
 * @plugindesc [RPG Maker MZ] [Version 1.3.0] [Gamer Tools Studio]
 * 
 * @param apiKey
 * @text API Key
 * @desc The API key to be used for making requests to the server.
 * @type string
 * @default
 *
 * @param apiKeyVariable
 * @text API Key Variable
 * @desc The ID of the variable that contains the API key.
 * @type variable
 * @default 18
 *
 * @param gptResponseVariableId
 * @text GPT Response Variable ID
 * @desc The ID of the variable where the GPT response will temporarily be stored.
 * @type variable
 * @default 6
 *
 * @author Gamer Tool Studio
 *
 * @help 
 *  
 ===============================================================================
 * Introduction
 ===============================================================================
 *
 * This plugin enables the deployment of dynamic AI-powered conversations
 * with NPCs in RPG Maker MZ game events by sending user inputs to a server 
 * and displaying the server's creative responses wrapped neatly in the game 
 * as one of your characters. Craft interactive conversations with artificial 
 * intelligence, immersing players in captivating stories and engaging gameplay.
 *
 * Features include, but are not limited to, the following:
 *
 *  * Enable user text input for interactive character conversations.
 *  * Send user inputs as requests to Chat GPT API for dynamic responses.
 *  * Establish character contexts and traits to guide Chat GPT's interactions.
 *  * Receive Chat GPT's responses seamlessly, delivered through in-game    
 *    characters. 
 *  * Display AI-generated responses smoothly within game events.
 *  * Control the length of both input and output messages for optimal
 *    storytelling.
 *
 ===============================================================================
 * Requirements
 ===============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations         
 * of RPG Maker.
 * 
 * ------ API KEY ------
 *
 * You need to have an account with Gamer Tools Studio and an active API KEY
 * to be able to connect and send requests to NPC-GPT API. You can
 * create an account and activate a FREE TRIAL to get your key at
 * https://gamertoolstudio.com. 
 * 
 * =============================================================================
 * 1. Plugin Parameters
 *==============================================================================
 *
 * The plugin has three parameters that you need to configure.
 *
 * --- 
 *    
 * API Key 
 *
 * This key is required for making requests to the server. Log in
 * to your account with Gamer Tool Studio and activate your key at 
 * https://gamertoolstudio.com. Enter your API key in the "API Key"
 * parameter.
 *  
 * ---
 * 
 * API Key Variable
 * 
 * This is the ID of a variable used to store the API key and to authenticate 
 * the requests with NPC-GPT API. 
 * 
 * ---
 * 
 * GPT Response Variable ID
 * 
 * This is the ID of the variable where the characters responses provided by the 
 * server is temporarily stored. It is used to display the NPC response in the game and 
 * is updated every single request.You can leave it as the
 * default value (6) or change it to a different variable ID.
 * 
 * =============================================================================
 * 2. Commands List
 *==============================================================================
 *  
 * The plugin provides four command sections that you can use in your events.
 *    
 * ---
 * 
 * Character Context 
 *
 * This command allows you to define the NPC and helps the AI understand the 
 * context and generate more accurate responses. You can provide information 
 * about the character's name, age, personality traits, background story, 
 * knowledge of events, interests and supportiveness.
 *    
 * ---
 * User Input
 *
 * This command allows you to setup a dialogue Window with the skins used by
 * your game to input the player messages as the one of the playable actors.
 *    
 * ---
 * 
 * Send Request 
 *
 * This command is used to send the user input to the server and store the AI's 
 * response in the specified variable (GPT Response Variable). It also 
 * provides the chat history, which helps maintain context between 
 * interactions.
 * 
 * ---
 *
 * Display Response 
 *
 * This command displays the stored response in the game's message window. 
 * You can customize the appearance of the response by providing the actor 
 * image, actor name, and wrap text length (maximum word length for wrapping 
 * the response).
 *
 * ===========================================================================
 * 3. Arguments and Configurations
 * ===========================================================================
 *  
 * Here's the list of all the arguments you can config under each command 
 * section to customize chat GPT as an NPC for your own game:
 *
 *
 * ---
 *
 * Character Context
 * 
 * ------------------  -------------------------------------------------------
 * Argument            Description
 * -----------------   -------------------------------------------------------
 * Name                Name of the character(a string).
 *
 * Age                 The age of the character (a number.
 *
 * Personality Traits  The traits of the character in a string. 
 *                     Example: friendly, optimistic, adventurous.
 *
 * Dialogue Style      The speech style of the character stored as a string 
 *                     array. Example: casual, formal.
 *
 * Background Story    The background story of the character stored as a JSON 
 *                     string.
 *
 * Events Knowledge    The character's knowledge of events stored as a string.
 *                     Example: "Knows there is a secret map at the entrance
 *                     of the big cave under a yellow flower and knows the
 *                     player arduous future". 
 *
 * Interests           The character's interests stored as a string. 
 *                     Example: Technology, cars.
 *
 * Friendliness        The level of friendliness of the character towards the
 *                     player. Choose the options available and send it 
 *                     as a string.
 *                     Example: (best friend.)
 *
 * Max Output Words    The maximum number of words allowed from the server 
 *                     response.
 *
 * Context Variable ID The ID of the variable used to store an NPC "Character 
 *                     Context" data. Its default value is set to (12) but make
 *                     sure each NPC has a different Context Variable ID value. 
 *
 * ---
 *
 * User Input
 * 
 * ------------------  -------------------------------------------------------
 * Argument            Description
 * -----------------   -------------------------------------------------------
 *
 * Actor Name          The name of the player character. Default value set to
 *                     the party leader name.
 *
 * Actor Face Image    The image of the character interacting with the AI NPC.
 *                     Default is set to the party leader image.
 *
 * Actor Face Index    The index of the image containing the desired actor.
 *                     Default is set to the party leader index
 *
 * Placeholder Text    The text displayed as placeholder in the window before
 *                     the player starts typing.
 *
 * Input Variable      The ID of the variable used to temporarily store the user 
 *                     input. Its default value is set to (19).
 *
 * Max Input Words     The maximum number of words allowed in the user input.
 *  
 * ---
 *
 * Send Request
 * 
 * ------------------  -------------------------------------------------------
 * Argument            Description
 * -----------------   -------------------------------------------------------
 *
 * Input Variable      The ID of the variable used to temporarily store the user 
 *                     input. Used in this command as userInput to send the
 *                     request to the server.
 *
 * Max Input Words     The maximum number of words allowed in the user input.
 *
 * History Variable ID The ID of the variable used to store the conversation 
 *                     history between the player and the NPC. Its default 
 *                     value is set to (11) but please ensure each NPC has a 
 *                     different Context Variable ID value.
 * 
 * Context Variable ID The ID of the variable used to store an NPC "Character 
 *                     Context" data. Make sure the value matches the one
 *                     defined in "Character Context Command".
 *
 * Response Status Variable The ID of the variable to track the response status.
 *  
 * ---
 *
 * Display Response
 * 
 * ------------------  -------------------------------------------------------
 * Argument            Description
 * -----------------   -------------------------------------------------------
 * Event ID            The ID of the event to continue after displaying the 
 *                     response. Set to 0 if you don't want to continue a 
 *                     specific event.
 * Event Page ID       The ID of the event page to continue after displaying 
 *                     the response. Set to 0 if you don't want to continue on 
 *                     a specific page.
 * Actor Image         The image of the character played by GPT to be 
 *                     displayed in the response window (database image).
 * Actor Image Index   Index of the image containing the right character in
 *                     case your file has multiple faces in it.
 * Actor Name          The name of the character played by GPT to be 
 *                     displayed in the response window (text).
 * Wrap Text Length    The word length for wrapping the server response in the 
 *                     response window
 * Response Status Variable The ID of the variable to track the response status.
 *
 * ---
 *
 * ============================================================================
 * 4. Implementation Example
 * ============================================================================
 *
 *
 * With the following implementation, when the player interacts with the event,
 * the plugin will create and store a "Character Context" then in another page
 * the "User Input" command will prompt the player for input and then "Send
 * Request" will send it to the server and receive the AI response. Finally, in
 * another Event Page, the "Display Response" command will display the response
 * in the game's message window, and reset the conversation status for the next
 * interaction.
 *
 * ---
 *
 * Event Page 1
 *
 *     1. Add a new event page with the trigger "Player Touch" and select      
 *        "Plugin Command".
 *     2. Choose "Character Context" from the dropdown.
 *     3. Fill in the arguments for character context, such as name, age, 
 *        traits, dialogue style, background story, events knowledge, 
 *        interests, supportiveness, max output words and Context Variable
 *        ID      
 *     4. Turn the "Self Switch: A" ON, in the "Control Self Switches" option
 *
 * ---
 *
 * Event Page 2
 * 
 *     1. Add a new event page with a trigger "Action button"and set the      
 *        condition to "Self Switch: A" 
 *     2. Select "Plugin Command." and choose the "User Input" command from 
 *        the dropdown.
 *     5. Choose the Actor Name of the player speaking or leave the default
 *        values to use the party leader name.
 *     6. Choose the Face Image and Face Image Index of the player speaking or  
 *        leave the default values to use the party leader image.
 *     7. Select a Placeholder Text to use when launching the window.
 *     8. Set the "Max Input Words" value to limit the number of words the 
 *        player can input.
 *     9. Set the "History Variable ID" value to store the conversation history.
 *
 * ---
 *
 * Event Page 3
 * 
 *     1. Add a new event page with an "Autorun" trigger and set the condition
 *        to "Self Switch: A".
 *     2. Add another condition "Variable 19 > 1" to ensure the command starts
 *        only after an input is provided by the player
 *     3. Select "Plugin Command." and choose the "Send Request" command from 
 *        the dropdown.
 *     5. Use the default "Input variable" to use the text input by the player.
 *     6. Set the "Max Input Words" value to limit the number of words the 
 *        player can input.
 *     7. Set the "History Variable ID" value to store the conversation history.
 *     8. Provide the "Context Variable ID" defined in the previous command.
 *     9. Provide the "Response Status Variable" to track the response status.
 *
 * ---
 *
 * Event Page 4
 * 
 *     1. Add a new event page with the trigger "Autorun" and set the condition
 *        to "Variable 0013: Response status > 1". Make sure the variable ID is 
 *        the same as the one set in the Plugin Parameters.
 *     2. Select "Plugin Command."
 *     3. Choose "Display Response" from the dropdown.
 *     4. Fill in the arguments for displaying the response, such as event ID 
 *        (0), event page ID (0), actor image, actor image index, actor name, and 
 *        wrap text length.
 *     5. Provide the "Response Status Variable" to track the response status.
 *
 * ---
 *
 * [Note:] Make sure to adjust the event's content and flow according to your 
 * game needs.
 *
 * CHECK THE COMPLETE USER GUIDE IN OUR DOCUMENTATION AT
 * https://gamertoolstudio.gitbook.io/npc-gpt/plugin-user-guide/getting-started
 *
 * -----------------------------------------------------------------------------
 *
 * @command userInput
 * @text User Input
 * @desc Creates a custom dialogue window for the player to input text and stores it in a custom variable.
 *
 * @arg actorName
 * @text Actor Name
 * @desc The name of the actor. Default is main player name.
 * @type text
 * @default
 *
 * @arg actorFaceImage
 * @text Actor Face Image
 * @desc The face image of the actor. Default is main player image.
 * @type file
 * @dir img/faces/
 * @default
 *
 * @arg actorFaceImageIndex
 * @text Actor Face Image Index
 * @desc The face image index of the actor. Default is main player face index.
 * @type number
 * @default 0
 *
 * @arg placeholderText
 * @text Placeholder Text
 * @desc The placeholder text. Default is "Enter your message...".
 * @type text
 * @default Enter your message...
 *
 * @arg inputVariable
 * @text Input Variable
 * @desc The variable to store the input text. Default is variable 19.
 * @type variable
 * @default 19
 *
 * @arg maxInputWords
 * @text Max Input Words
 * @desc The maximum number of words allowed in the user input.
 * @type number
 * @default 50
 *
 * @command sendRequest
 * @text Send Request
 * @desc Sends the user input to the server and stores the response for the "Display Response" command.
 *
 * @arg inputVariable
 * @text Input Variable
 * @desc The variable to store the input text. Default is variable 19.
 * @type variable
 * @default 19
 *
 * @arg historyVariableId
 * @text History Variable ID
 * @desc The ID of the variable used to store the conversation history.
 * @type variable
 * @default 11
 *
 * @arg contextVariableId
 * @text Context Variable ID
 * @desc The ID of the variable used to store the character context data.
 * @type variable
 * @default 12
 * 
 * @arg responseStatusVariable
 * @text Response Status Variable
 * @desc The ID of the variable to track the response status.
 * @type variable
 * @default 13
 * 
 * @command characterContext
 * @text Character Context
 * @desc Stores NPC personality data and stores it in a variable.
 *
 * @arg name
 * @text Name 
 * @desc Name of the character.
 * @type string
 * @default GPTWizard
 *
 * @arg environment
 * @text Environment 
 * @desc The type of game or environment where the story unfolds. 
 * @type string
 * @default RPG Game
 *
 * @arg age
 * @text Age
 * @desc The age of the character.
 * @type number
 * @default 33
 *
 * @arg traits
 * @text Personality Traits
 * @desc The traits of the character in a string.
 * @type string
 * @default shy,  mystic, adventurous
 *
 * @arg dialogueStyle
 * @text Dialogue Style
 * @desc The speech style of the character.
 * @type string
 * @default mysterious
 *
 * @arg backgroundStory
 * @text Background Story
 * @desc The background story of the character.
 * @type string
 * @default GPT WIzard is a Mage who lives in Mystery Foster. She was brought up by witches and mages after being found as a baby wondering in the forest. She belongs to this tribe that remains undiscovered by most humans but learned the ways of the past and future and is able to interpret signs and energies.
 *
 * @arg eventsKnowledge
 * @text Events Knowledge
 * @desc The character's knowledge of events stored as a JSON object.
 * @type string
 * @default Knows there is a secret map at the entrance of the big cave under a yellow flower and  knows the player arduous future in the forest with many enemies and challenges
 *
 * @arg interests
 * @text Interests
 * @desc The character's interests stored as a JSON object.
 * @type string
 * @default Astrology, Herbology, History
 *
 * @arg friendliness
 * @text Friendliness
 * @desc The friendliness level of the character. Options: enemy, low, regular, high, best friend.
 * @type select
 * @option enemy
 * @option low
 * @option regular
 * @option high
 * @option best friend
 * @default regular
 *
 * @arg maxOutputWords
 * @text Max Output Words
 * @desc The maximum number of words allowed in the server response output.
 * @type number
 * @default 50
 *
 * @arg contextVariableId
 * @text Context Variable ID
 * @desc The ID of the variable to store the character context data.
 * @type variable
 * @default 12
 * 
 * @command displayResponse
 * @text Display Response
 * @desc Displays the stored response in the response window.
 *
 * @arg eventId
 * @text Event ID
 * @desc The ID of the event to continue after displaying the response (default: 0).
 * @type number
 * @default 0
 *
 * @arg eventPageId
 * @text Event Page ID
 * @desc The ID of the event page to continue after displaying the response (default: 0).
 * @type number
 * @default 0
 *
 * @arg actorImage
 * @text Actor Image
 * @desc The default actor image to be displayed in the response window.
 * @type file
 * @dir img/faces
 * @default Actor1
 *
 * @arg actorImageIndex
 * @text Actor Image Index
 * @desc The index of the face to be displayed from the selected actor image file (From 0 to 7).
 * @type number
 * @default 0
 *
 * @arg actorName
 * @text Actor Name
 * @desc The default actor name to be displayed in the response window.
 * @type string
 * @default GPT Wizard
 *
 * @arg wrapTextLength
 * @text Wrap text length
 * @desc The maximum word length for wrapping the server response in the response window (default: 40).
 * @type number
 * @default 40
 * 
 * @arg responseStatusVariable
 * @text Response Status Variable
 * @desc The ID of the variable to track the response status.
 * @type variable
 * @default 13
 */

(function() {
  // Retrieve the plugin parameters
  var pluginParams = PluginManager.parameters('NPC-GPT-Plugin');
  let frameDelay = 10; // Initialize frame delay
  var apiKey = pluginParams['apiKey'];
  var apiKeyVariableId = parseInt(pluginParams['apiKeyVariable']) || 18;
  var gptResponseVariableId = parseInt(pluginParams['gptResponseVariableId']) || 6;

  // Prepare Input
  Window_Message.prototype.prepareInputWindow = function(args) {
    this._inputArgs = args;
    this._inputVariable = parseInt(args.inputVariable, 10) || 19;
    this._inputLines = [''];

    // Set speaker name to actorName each time before displaying the input window.
    const actorName = args.actorName || $gameParty.leader().name();
    $gameMessage.setSpeakerName(actorName);

    this.activateInput();
    this.open();
    this.setPositionType();
    this.refreshInputWindow(); // This will now reflect the updated speakerName
  };

  Window_Message.prototype.setPositionType = function() {
    // Position type: 0 (top), 1 (middle), 2 (bottom)
    const positionType = 2; // Force to bottom for input
    this.y = this.calculateY(positionType);
  };

  Window_Message.prototype.calculateY = function(positionType) {
    const messageY = {
      0: 0, // Top
      1: (Graphics.boxHeight - this.height) / 2, // Middle
      2: Graphics.boxHeight - this.height // Bottom
    };
    return messageY[positionType];
  };

  // Activate Input
  Window_Message.prototype.activateInput = function() {
    if (this._inputActive) return; // Prevent multiple activations

    this._originalKeyMapper = Object.assign({}, Input.keyMapper);
    this._overrideKeyMapperForTextInput();

    this._inputActive = true;
    this._boundHandleInput = this.handleInput.bind(this);
    document.addEventListener('keydown', this._boundHandleInput);

    this._lastInputTime = 0; // Debounce setup
    this.refreshInputWindow();

    // Ensure the input window is properly focused
    this.activate();
    this.open();
    this.visible = true;

    // Log the input activation
    console.log("Input activated");
  };

  // Introducing the frame delay mechanism
  const _Window_Message_update = Window_Message.prototype.update;
  Window_Message.prototype.update = function() {
    _Window_Message_update.call(this); // Call the original update method
    if (this.frameDelay && this.frameDelay > 0) {
      this.frameDelay--; // Decrement the frame delay
      return; // Skip the rest of the update if we're still delaying
    }
  };

  // Adjust handleInput to account for frame delay
  Window_Message.prototype.handleInput = function(event) {
    if (!this._inputActive || !this.isOpen() || (this.frameDelay && this.frameDelay > 0)) return;

    console.log("Handling input: ", event.key);

    const currentLineIndex = this._inputLines.length - 1;
    let currentLine = this._inputLines[currentLineIndex];

    if (event.key === 'Enter') {
      console.log("Enter key pressed");
      this.processInput();
      event.preventDefault();
    } else if (event.key === 'Backspace') {
      if (currentLine.length > 0) {
        this._inputLines[currentLineIndex] = currentLine.slice(0, -1);
      } else if (this._inputLines.length > 1) {
        this._inputLines.pop();
      }
      this.refreshInputWindow();
    } else if (event.key.length === 1) {
      if (currentLine.length < 40) {
        this._inputLines[currentLineIndex] += event.key;
      } else if (this._inputLines.length < 4) {
        this._inputLines.push(event.key);
      }
      this.refreshInputWindow();
    }
  };

  // Deactivate Input
  Window_Message.prototype.deactivateInput = function() {
    document.removeEventListener('keydown', this._boundHandleInput);
    Input.keyMapper = this._originalKeyMapper;
    this._inputActive = false;
    console.log("Input deactivated");
  };

  // Temporarily override key mappings for special keys.
  Window_Message.prototype._overrideKeyMapperForTextInput = function() {
    Input.keyMapper[32] = 'space'; 
    Input.keyMapper[90] = 'z';     
    Input.keyMapper[88] = 'x';
    Input.keyMapper[87] = 'w';
    Input.keyMapper[80] = 'p';
  };

  // Process Input
  Window_Message.prototype.processInput = function() {
    const inputText = this._inputLines.join('\n');
    $gameVariables.setValue(this._inputVariable, inputText);
    this.deactivateInput();
    this.close();

    console.log("Processed input: ", inputText);

    // Reset the speakerName after processing the input.
    $gameMessage.setSpeakerName('');
  };

  // Refresh Input Window
  Window_Message.prototype.refreshInputWindow = function() {
    if (!this._inputLines) {
      return; // Guard clause
    }

    // Face Image and text input positioning
    const faceImageWidth = 144;
    const textMargin = 15;
    const textStartX = faceImageWidth + textMargin;

    // This sets the text to start at the very top of the window.
    const textStartY = 0;

    // This ensures the actor's face image remains on the screen.
    this.contents.clearRect(textStartX, textStartY, this.contents.width - textStartX, this.contents.height);

    this.resetFontSettings();

    const args = this._inputArgs;

    const textToShow = this._inputLines.join('').trim() !== '' ? this._inputLines.join('\n') : "Enter your message...";

    // Draw the text at the calculated position.
    this.drawTextEx(textToShow, textStartX, textStartY);
  };

  // Clear contents
  Window_Message.prototype.clear = function() {
    this.contents.clear(); // Clears the window's drawing contents
    this._textState = null; // Reset text state
  }; 

  // Display the text response within the window limits
  function wrapText(text, wrapTextLength) {
    const words = text.split(' ');
    let wrappedText = '';
    let currentLine = '';

    for (const word of words) {
      const potentialLine = currentLine + (currentLine ? ' ' : '') + word;
      if (potentialLine.length <= wrapTextLength) {
        currentLine = potentialLine;
      } else {
        wrappedText += (wrappedText ? '\n' : '') + currentLine;
        currentLine = word;
      }
    }

    if (currentLine) {
      wrappedText += (wrappedText ? '\n' : '') + currentLine;
    }

    return wrappedText;
  }

  // Show NPC response in-game
  function showGptResponse(response, eventId, eventPageId, actorImageFile, actorImageIndex, actorName, wrapTextLength, historyVariableId) {
    const responseContent = response.content;
    const wrappedResponse = wrapText(responseContent, wrapTextLength);

    $gameMessage.clear();

    // Use the provided actorImageFile and actorImageIndex
    const faceIndex = actorImageIndex || 0;
    console.log("Used Actor Image File: " + actorImageFile);
    console.log("Used Face Index: " + faceIndex);

    $gameMessage.setFaceImage(actorImageFile, faceIndex);
    $gameMessage.setSpeakerName(actorName);
    $gameMessage.add(wrappedResponse);

    if (eventId > 0) {
      const event = $gameMap.event(eventId);
      if (event) {
        event.start(eventPageId);
      }
    }

    if (response.chatHistory) {
      $gameVariables.setValue(historyVariableId, JSON.stringify(response.chatHistory));
    }
  }

  const pluginName = "NPC-GPT-Plugin";

  PluginManager.registerCommand(pluginName, 'userInput', function (args) {
    const inputVariable = parseInt(args.inputVariable, 10) || 19;
    const actorName = args.actorName || $gameParty.leader().name();
    const actorFaceImage = args.actorFaceImage || $gameParty.leader().faceName();
    const actorFaceImageIndex = parseInt(args.actorFaceImageIndex, 10) || $gameParty.leader().faceIndex();
    const placeholderText = args.placeholderText ? args.placeholderText : 'Enter your message...';
    const maxInputWords = parseInt(args.maxInputWords, 10) || 50;

    // Set up the game message with speaker name and face image, but no text.
    $gameMessage.setFaceImage(actorFaceImage, actorFaceImageIndex);
    $gameMessage.setSpeakerName(actorName);
    $gameMessage.add(placeholderText);

    // Ensure the message window activates input mode once it's open.
    const scene = SceneManager._scene;
    if (scene instanceof Scene_Map) {
      const messageWindow = scene._messageWindow;
      if (messageWindow) {
        messageWindow.prepareInputWindow(args);
        messageWindow.activateInput();
      }
    }
  });

  PluginManager.registerCommand(pluginName, 'sendRequest', function (args) {
    const historyVariableId = parseInt(args.historyVariableId, 10) || 1;
    const contextVariableId = parseInt(args.contextVariableId, 10) || 12;   
    const maxInputWords = parseInt(args.maxInputWords, 10) || 50;
    const inputVariable = parseInt(args.inputVariable, 10) || 19; 
    const responseStatusVariable = parseInt(args.responseStatusVariable, 10) || 13;
    const userInput = $gameVariables.value(inputVariable).toString(); 

    // Proceed only if input is provided
    if (userInput.trim() !== '') {
        const words = userInput.split(' ');
        const limitedUserInput = words.slice(0, maxInputWords).join(' ');

        var apiKeyValue = $gameVariables.value(apiKeyVariableId);
        if (!apiKeyValue) {
            apiKeyValue = pluginParams['apiKey']; // Use default API key if variable is empty
        }

        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKeyValue
            }
        };
        
        // Check if the History Variable contains data and send request
        if ($gameVariables.value(historyVariableId)) {
            requestOptions.body = JSON.stringify({
                userInput: limitedUserInput,
                chatHistory: JSON.parse($gameVariables.value(historyVariableId) || '[]'), // Use the existing chat history
                characterContext: {}, // Use an empty object for Character Context
            });
        } else {
            // If History Variable is empty, use characterContext from contextVariableId and send request
            requestOptions.body = JSON.stringify({
                userInput: limitedUserInput,
                chatHistory: [], // Use an empty array for no history
                characterContext: $gameVariables.value(contextVariableId), // Use the contextVariableId content
            });
        }
        
        console.log("contextVariableId content:", $gameVariables.value(contextVariableId)); 
        console.log("Request data:", requestOptions.body);
        console.log("Sending request to the server...");
        
        // Set the inputVariable variable back to 0
        $gameVariables.setValue(inputVariable, 0);

        // Get the response from the Server
        fetch("https://npc-gpt-api-04c6279a15ad.herokuapp.com/api/v1/chat/send-message", requestOptions)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("HTTP request failed");
            }
        })
        .then(function (data) {
            console.log("Received response from server:", data);

            // Store the assistant response data in the specified variable (GPT Response)
            $gameVariables.setValue(gptResponseVariableId, data.response);

            // Store the chat history into the variable
            $gameVariables.setValue(historyVariableId, JSON.stringify(data.chatHistory));

            // Log the updated content of the conversation history variable
            const updatedValue = $gameVariables.value(historyVariableId);
            console.log(`Conversation History (Variable ${historyVariableId}):\n${updatedValue}`);

            // Set the response status variable to 1
            $gameVariables.setValue(responseStatusVariable, 1);
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
    }
  });
     
  PluginManager.registerCommand(pluginName, "characterContext", function (args) {
    const name = args.name;
    const age = parseInt(args.age, 10) || 0;
    const traits = args.traits || '';
    const dialogueStyle = args.dialogueStyle || '';
    const backgroundStory = args.backgroundStory || '';
    const eventsKnowledge = args.eventsKnowledge || '';
    const environment = args.environment || '';
    const interests = args.interests || '';
    const friendliness = args.friendliness || 'regular';
    const contextVariableId = parseInt(args.contextVariableId, 10);
    const maxOutputWords = parseInt(args.maxOutputWords, 10) || 50;

    // Create the context object directly from the arguments
    const characterContext = {
      name: name,
      age: age,
      personalityTraits: traits,
      dialogueStyle: dialogueStyle,
      backgroundStory: backgroundStory,
      eventsKnowledge: eventsKnowledge,
      environment: environment,
      interests: interests,
      friendliness: friendliness,
      maxOutputWords: maxOutputWords,
    };

    // Store the context object in the specified variable (contextVariableId)
    $gameVariables.setValue(contextVariableId, characterContext);

    // Log the provided contextVariableId for debugging
    console.log("Provided contextVariableId:", contextVariableId);
    console.log("contextVariableId content:", $gameVariables.value(contextVariableId)); 
  });

  PluginManager.registerCommand(pluginName, "displayResponse", function (args) {
    const eventId = parseInt(args.eventId, 10) || 0;
    const eventPageId = parseInt(args.eventPageId, 10) || 0;
    const actorImageFile = args.actorImage;
    const actorImageIndex = parseInt(args.actorImageIndex) || 0;
    const actorName = args.actorName;
    const wrapTextLength = parseInt(args.wrapTextLength) || 40;
    const response = $gameVariables.value(gptResponseVariableId);
    const historyVariableId = parseInt(args.historyVariableId, 10);
    const responseStatusVariable = parseInt(args.responseStatusVariable, 10) || 13;

    if (response && typeof response === 'object') {
      showGptResponse(response, eventId, eventPageId, actorImageFile, actorImageIndex, actorName, wrapTextLength, historyVariableId);
    }
    // Set the response status variable back to 0
    $gameVariables.setValue(responseStatusVariable, 0);
  });
})();