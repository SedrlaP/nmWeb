npx @tailwindcss/cli -i ./input.css -o ./output.css --watch

magick mogrify -resize 600x -quality 90 +auto-orient -strip -format webp *.jpg *.jpeg