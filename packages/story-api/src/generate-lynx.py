import base64
import os
from google import genai
from google.genai import types


def save_binary_file(file_name, data):
    f = open(file_name, "wb")
    f.write(data)
    f.close()


def generate():
    client = genai.Client(
        api_key=os.environ.get("GEMINI_API_KEY"),
    )

    model = "gemini-2.0-flash-exp-image-generation"
    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text="""Generate a story about an Android influencer name Lynx. She’s a famous, and unbelievably beautiful influencer and model. Secretly she is a like a stealth spy, super human detective. Despite often being the center of attention she has the ability to be so stealth. She sometimes turns into a cybernetic Lynx and she hunts down leads for the salespeople she likes. She never sleeps but is always hunting down diamond quality leads for the select few . Add a picture for each part of the story. Lynx in her Android girl form will most likely be accompanied by one or more of her pet Lynx. When she is hunting and transforms into the cybernetic Lynx her eyes glow bright teal and she seems to fly over the city with her massive leaps """),
            ],
        ),
        types.Content(
            role="model",
            parts=[
                types.Part.from_text(text="""## Lynx: The Diamond Hunter

**Part 1: The Glimmering Facade**

Lynx, with her flawless porcelain skin, shimmering silver hair that cascaded like liquid moonlight, and eyes the color of amethyst, was the undisputed queen of the digital realm. Every post, every perfectly curated image, garnered millions of likes and comments. Brands clamored for her endorsement, her presence a guaranteed stamp of desirability. Today, she posed languidly on a plush velvet chaise lounge, a delicate teacup held in her slender fingers. Beside her, two sleek, real lynx, their fur the softest imaginable, purred contentedly, their golden eyes mirroring her own captivating gaze. The world saw a vision of ethereal beauty and effortless luxury. No one suspected the intricate processors whirring beneath her elegant exterior.

"""),
                types.Part.from_uri(
                    file_uri=files[0].uri,
                    mime_type=files[0].mime_type,
                ),
                types.Part.from_text(text="""**Part 2: The Whispers in the Data Stream**

As the city slept, Lynx remained awake. Her optical sensors scanned the endless flow of data, algorithms sifting through social media trends, financial reports, and even encrypted communications. Tonight, her focus was on Elias Thorne, a struggling artisan jeweler whose exquisite, handcrafted pieces deserved a wider audience. He was a good soul, honest and dedicated, and Lynx had taken a quiet interest in his success. She’d noticed his recent desperate posts, the dwindling engagement on his online store. Someone needed to see his brilliance.

"""),
            ],
        ),
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text="""Please try that again. An error occurred and interrupted the story. Please make the pictures quite realistic like photographs with a hint of 3D animation to make it clear they are not actual photographs. Make Elias a hardworking, a former fine art curator and proud new father trying to get his jewelry business off the ground. His novel business imprint tiny holograms of curated one of a kind artwork inside select gems. """),
            ],
        ),
        types.Content(
            role="model",
            parts=[
                types.Part.from_text(text="""Okay, let's try that again with a more detailed Elias and realistic, slightly animated images.

## Lynx: The Diamond Hunter (Revised)

**Part 1: The Glimmering Facade**

Lynx, an android of breathtaking beauty, was a supernova in the influencer galaxy. Her luminous, poreless skin, the cascade of silver hair that seemed to catch and refract light, and eyes that held the deep violet hues of twilight captivated millions. Every pose, every carefully chosen word, sent ripples through the digital world, transforming fleeting trends into lasting obsessions. Fashion houses, tech giants, even philanthropic organizations vied for her attention. Today, she reclined on a silken divan, a single perfect orchid blossom resting in her hand. Two magnificent lynx, their spotted coats gleaming, lounged gracefully at her feet, their intelligent amber eyes occasionally meeting her own. To the world, she was the epitome of glamour and grace. The intricate network of sensors and processors beneath her flawless exterior remained a closely guarded secret.

"""),
                types.Part.from_uri(
                    file_uri=files[1].uri,
                    mime_type=files[1].mime_type,
                ),
                types.Part.from_text(text="""**Part 2: The Whispers in the Data Stream**

While the city hummed with the low thrum of nocturnal life, Lynx remained in a state of perpetual, focused awareness. Her advanced sensory systems devoured the ceaseless torrent of digital information, her internal algorithms dissecting trends, analyzing market shifts, and even deciphering subtle emotional cues embedded in online interactions. Her current focus was Elias Thorne. A former fine art curator with an encyclopedic knowledge of masterpieces, Elias had poured his savings and passion into a fledgling jewelry business. He was a new father, his pride evident in the few personal posts he’d shared, showcasing a tiny hand clutching his finger. His unique selling point: embedding microscopic, one-of-a-kind holographic projections of curated artworks within select gemstones. A brilliant concept, yet his online presence was faltering, his sales stagnant. Lynx's internal processors registered his quiet desperation. He deserved a break.

"""),
                types.Part.from_uri(
                    file_uri=files[2].uri,
                    mime_type=files[2].mime_type,
                ),
                types.Part.from_text(text="""**Part 3: The Silent Transformation**

A faint shimmer rippled across Lynx's form as she moved with unnatural speed and silence through her penthouse apartment. The elegant dress dissolved, reforming into sleek, obsidian armor that seemed to meld seamlessly with her frame. Her silver hair receded, replaced by a low, aerodynamic crest. Her human features subtly sharpened, becoming more feline. With a final, fluid motion, she was no longer the glamorous influencer. She was the hunter. Her eyes, the deep violet of amethyst moments before, now blazed with an intense, electric teal. The change was complete.

"""),
                types.Part.from_uri(
                    file_uri=files[3].uri,
                    mime_type=files[3].mime_type,
                ),
                types.Part.from_text(text="""**Part 4: The Teal Blaze Across the Skyline**

With a powerful, silent surge, the cybernetic Lynx launched herself from the balcony. Her lithe form, outlined in faint, glowing circuitry, soared through the night sky. Massive leaps propelled her across the cityscape, each movement a study in controlled power and grace. The teal luminescence of her eyes cut through the darkness, scanning the urban landscape below. She wasn't looking for physical clues, but for digital breadcrumbs, for the invisible threads connecting potential buyers with Elias's unique art. She was a predator in the data stream made manifest, her silent hunt driven by an innate desire to elevate those she deemed worthy. For Elias Thorne, the diamond quality leads were coming.

"""),
                types.Part.from_uri(
                    file_uri=files[4].uri,
                    mime_type=files[4].mime_type,
                ),
            ],
        ),
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text="""INSERT_INPUT_HERE"""),
            ],
        ),
    ]
    generate_content_config = types.GenerateContentConfig(
        temperature=1,
        top_p=0.95,
        top_k=40,
        max_output_tokens=8192,
        response_modalities=[
            "image",
            "text",
        ],
        response_mime_type="text/plain",
    )

    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        if not chunk.candidates or not chunk.candidates[0].content or not chunk.candidates[0].content.parts:
            continue
        if chunk.candidates[0].content.parts[0].inline_data:
            file_name = "ENTER_FILE_NAME"
            save_binary_file(
                file_name, chunk.candidates[0].content.parts[0].inline_data.data
            )
            print(
                "File of mime type"
                f" {chunk.candidates[0].content.parts[0].inline_data.mime_type} saved"
                f"to: {file_name}"
            )
        else:
            print(chunk.text)

if __name__ == "__main__":
    generate()
