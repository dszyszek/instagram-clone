from bs4 import BeautifulSoup
import requests

def scrape_images(phrase):
    google_url = f'https://www.google.com/search?q={phrase}&tbm=isch'
    site = requests.get(google_url)

    soup = BeautifulSoup(site.text, 'html.parser')

    images_list = soup.find_all('img')

    images_source = [img.get('src') for img in images_list if img.get('src')[:4] == 'http']
    
    return images_source

if __name__ == '__main__':
    imgs = scrape_images('rope')
    [print(img) for img in imgs]
