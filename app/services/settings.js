import Service from '@ember/service';
const { app } = requireNode('electron');

export default Service.extend({
  version: Ember.computed(() => {
  	return app.getVersion();
  }),
  // Set Variables
  variables: {
    allow_c1_chars:  false, // Whether to filter out chars 128-159 or not
    autoload_scripts:  true, // Whether to auto load scripts
    autoload_dir:  "Scripts", // Directory to autoload scripts from
    banner:  "*** ", // The thing to display before system messages
    banner_expand:  false, // Whether to run banner through the $-expander
    beep:  false, // Whether to allow beeps or eat them (for future IRC use)
    channel_name_width:  "auto", // How wide channel names should be on status bar in pixels or auto
    theapp: Ember.computed(function() {
    	console.log(app);
    	return app;
    }),
    //client_information:  `${app.getName()} v${app.getVersion()}`,
    clock_24hour:  false, // Self explanatory
    clock_format:  "", // What Date format to use for clock
    cmdchars:  "/", // What characters are used before a command (ie. /)
    dcc_auto_send_rejects:  true, // for future IRC use
    dcc_dequote_filenames:  true, // for future IRC use - De-urlify filenames offered, this permits filenames with spaces
    dcc_long_pathnames:  true, // for future IRC use - Show the full path, or just the filename, in /dcc list
    flood_after:  10, // How many linesto receive before checking flooding rate
    flood_ignore:  false, // whether to /ignore people flooding you
    flood_rate:  5, // how many lines per second constitutes a flood (numerator)
    flood_rate_per:  0, // how many lines per second constitutes a flood (denominator)
    flood_users:  1, // How many different flooders to check
    flood_warning:  false, // Whether to output a message when getting flooded
    hide_private_channels:  false, // Whether to hide channel name on the status bar
    indent:  true, // whether to indent broken lines
    input_prompt:  "", // What prompt to use in the input line
    insert_mode:  true, // Whether to insert or overwrite the char under the cursor
    load_path:  "", // Where to look for load files
    log:  true, // Whether to write everything output to the global log file
    log_rewrite:  false, // Rewrite stuff before its written to the global logfile
    logfile:  "irc.log", // Name of the log file
    mirc_bnroken_dcc_resume:  false, // For future IRC use - whether or not to use DCC resume
    no_ctcp_flood:  true, // Whether the cliednt should ignore ctcps that come too fast
    no_fail_disconnect:  false, // Whether the client should disconnect from server when writes fail
    notify:  true, // Whether the clienbt should check occasionally for users on Twitch / IRC
    notify_interval:  5, // How often the client should check for notify nicknames
    notify_level:  1, // What the default window notify level should be
    notify_userhost_automatic:  false, // Whether the notify system should ask for userhosts berore telling you a nick is online
    pad_char:  ' ', // What char should we use for the $[num]var expandos
    quit_message:  "Time wasted on Twitch: ", // What the default quit message should be
    realname:  "", // Real name sent to server
    scroll_lines:  1, // How many lines the display should scroll when new output occurs in a full window (???)
    scrollback:  1000, // How big the default window scrollback size is
    show_channel_names:  true, // Whether to show the channel roster when joining a channel
    show_numerics:  false, // Whether to show the numeric code or banner when getting numeric replies
    show_status_all:  true, // Whether some status expandos show only in current window status or all window status
    show_who_hopcount:  false, // Whether to show the server hopcount in who replies (future IRC use)
  }	
});
