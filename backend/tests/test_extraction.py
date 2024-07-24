import unittest
from unittest.mock import patch, MagicMock
from app.data_extraction.extraction import ghafla_data, pulse_data, kiss_data

class TestExtraction(unittest.TestCase):

    @patch('app.data_extraction.extraction.requests.get')
    def test_ghafla_data(self, mock_get):
        mock_response = MagicMock()
        mock_response.text = '''
            <html>
                <body>
                    <input name="s" value="test"/>
                    <button class="btn btn-outline-secondary">Search</button>
                    <div class="gfl-grid-item">
                        <h5>Test Title</h5>
                        <p>Test Description</p>
                        <a href="http://example.com">Link</a>
                    </div>
                </body>
            </html>
        '''
        mock_get.return_value = mock_response
        results = ghafla_data('test')
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0]['title'], 'Test Title')
        self.assertEqual(results[0]['description'], 'Test Description')
        self.assertEqual(results[0]['link'], 'http://example.com')

    @patch('app.data_extraction.extraction.requests.get')
    def test_pulse_data(self, mock_get):
        mock_response = MagicMock()
        mock_response.text = '''
            <html>
                <body>
                    <li class="generic-list-item">
                        <h2>Test Title</h2>
                        <a href="http://example.com">Link</a>
                        <time datetime="2021-01-01">Time</time>
                    </li>
                </body>
            </html>
        '''
        mock_get.return_value = mock_response
        results = pulse_data('test')
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0]['title'], 'Test Title')
        self.assertEqual(results[0]['link'], 'http://example.com')
        self.assertEqual(results[0]['time'], '2021-01-01')

    @patch('app.data_extraction.extraction.requests.get')
    def test_kiss_data(self, mock_get):
        mock_response = MagicMock()
        mock_response.text = '''
            <html>
                <body>
                    <div class="articles-result">
                        <p class="title">Test Title</p>
                        <p>No Description</p>
                        <img src="http://example.com/image.jpg"/>
                        <a href="http://example.com">Link</a>
                        <span class="info readingTime">No Time</span>
                    </div>
                </body>
            </html>
        '''
        mock_get.return_value = mock_response
        results = kiss_data('test')
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0]['title'], 'Test Title')
        self.assertEqual(results[0]['description'], 'No Description')
        self.assertEqual(results[0]['link'], 'http://example.com')
        self.assertEqual(results[0]['time'], 'No Time')

if __name__ == '__main__':
    unittest.main()