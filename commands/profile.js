const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const fetch = require("node-fetch"); // This is to fetch the user avatar and convert it to a buffer.
async function profile(member, score) {
const imageUrlRegex = /\?size=2048$/g;


  // This will check to see if the command was ran in a guild instead of a DM.
  if (message.guild) {
    // This creates a "key" for enmaps Key/Value system.
    // We've declared it as a variable as we'll be using it in multiple places.
    const key = `${message.guild.id}-${message.author.id}`;
    // If the points database does not have the message author in the database...
    if (!client.points.has(key)) {
      // Create an entry for them...
      client.points.set(key, {
        // Using the predefined information below.
        user: message.author.id, guild: message.guild.id, points: 0, level: 1
      });
    }
    // We await both the message.channel.send, and the profile function.
    // Also remember, we wanted to pass the member object, and the points object.
    // Since we're creating a user profile, we should give it a unique file name.
    const buffer = await profile(message.member, client.points.get(key));
    const filename = `profile-${message.author.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await message.channel.send(attachment);
  }
// We only need the level, and points values, we don't need the user or guild id.
const { level, points } = client.points.get(key);
// We're grabbing the body out of snekfetch's get method, but at the same time we're assigning a variable
// to it, avatar.
// Remember when I mentioned the regex before? Now we get to use it, we want to set the size to 128 pixels,
// instead of 2048 pixels.
try {
  const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
  if (!result.ok) throw new Error("Failed to get the avatar.");
  const avatar = await result.buffer();

  // The reason for the displayName length check, is we don't want the name of the user going outside
  // the box we're going to be making later, so we grab all the characters from the 0 index through
  // to the 17th index and cut the rest off, then append `...`.
  const name = member.displayName.length > 20 ? member.displayName.substring(0, 17) + "..." : member.displayName;

  // ...
} catch (error) {
  await message.channel.send(`Something happened: ${error.message}`);
}
return new Canvas(400, 180)
return new Canvas(400, 180)
  // Create the Blurple rectangle on the right side of the image.
  .setColor("000000")
  .addRect(84, 0, 316, 180)
  .setColor("#2C2F33")
  .addRect(0, 0, 84, 180)
  .addRect(169, 26, 231, 46)
  .addRect(224, 108, 176, 46)
  .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
  .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
  .setShadowBlur(10) // Blur the shadow by 10.
  // This circle is 2 pixels smaller in the radius to prevent a pixel border.
  .addCircle(84, 90, 62)
addCircularImage(avatar, 20, 26, 64)
.createBeveledClip(20, 138, 128, 32, 5)
  .setColor("#23272A")
  .fill()
  .restore()
  .setTextAlign("center")
  // I'm using a custom font, which I will show you how to add next.
  .setTextFont("10pt Discord")
  // Set the colour to white, since we have a dark background for all the text boxes.
  .setColor("#FFFFFF")
  // Add the name variable.
  .addText(name, 285, 54)
  // Using template literals, you can add text and variables, we're applying the toLocaleString()
  // to break up the number into a nice readable format.
  .addText(`Level: ${level.toLocaleString()}`, 84, 159)
  // Now we want to align the text to the left.
  .setTextAlign("left")
  // Let's add all the points!
  .addText(`Score: ${points.toLocaleString()}`, 241, 136)
Canvas.registerFont(resolve(join(__dirname, "./path/to/font/Discord.ttf")), "Discord");
exports.run = async (client, message, args, level) => {
  // Your code here.
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "profile",
  category: "economy",
  description: "Display user profile.",
  usage: "profile"
};
