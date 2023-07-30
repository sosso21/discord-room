interface arrayToMessageContentProps {
  name: string;
  id: string;
  permission: string;
}

export const arrayToMessageContent = (
  array: arrayToMessageContentProps[]
): string => {
  // Create the message content
  let messageContent = "Here is the content of myArray:```js \n\n";

  for (const item of array ?? []) {
    messageContent += `Name: ${item.name}\nID: ${
      item.id
    }\nPermission: ${item?.permission?.toString()}\n\n`;
  }
  messageContent += "```";
  // Send the message
  return messageContent;
};
