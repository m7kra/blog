Sometimes Musicly won't play a track and give you a message like this:

`Couldn't play track. Click for more info. Track path: /home/m7kra/test.mp3`

This might happen for two different reasons:

- The file no longer exists. This happens when a file is deleted from the filesystem but remains in Musicly's database. The best solution is to delete the album from Musicly and re-add it.
- The file is not supported in Musicly. While Musicly filters out unsupported files using their file extension, some extensions are both supported and unsupported. For instance, tracks encoded with ALAC and AAC both use the `.m4a` extension, but Musicly only supports AAC. The best fix for this is to convert the file to a supported format.

If you've got any other questions, feel free to send me an email!

`luiswbarbosa@gmail.com`